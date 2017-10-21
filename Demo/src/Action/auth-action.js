import actionTypes from '../ActionTypes/actionTypes'
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert, ToastAndroid, AsyncStorage } from 'react-native';


export function ButtonSignUpAction(userSignUp) {
    return dispatch => {
        dispatch(LoadingAction());
        firebase.auth().createUserWithEmailAndPassword(userSignUp.email, userSignUp.password)
            .then((user) => {
                let firebaseData = {
                    email: userSignUp.email,
                    id: user.uid,
                };
                firebase.database().ref('users/' + user.uid).set(firebaseData)
                    .then(() => {
                        ToastAndroid.show('Account Created.', ToastAndroid.SHORT);
                        dispatch(LoadingAction());
                        dispatch(ErrorMessageDispatch())
                        Actions.login();
                    });
            })
            .catch((error) => {
                var errorMessage = error.message;
                dispatch(ErrorMessageDispatch(errorMessage))
                dispatch(LoadingAction());
            })
    }
}


var STORAGE_KEY = '@AsyncStorageExample:key';
export function ButtonLogInAction(userSignIn) {
    return dispatch => {
        dispatch(LoadingAction());
        dispatch(ErrorMessageDispatch())
        firebase.auth()
            .signInWithEmailAndPassword(userSignIn.email, userSignIn.password)
            .then((user) => {
                // dispatch(signInUpdate(user));
                dispatch(LoadingAction());
                AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(user), (err, result) => {
                    if (err) {
                        console.log("err>>>", err)
                    }
                    else {
                        AsyncStorage.getItem(STORAGE_KEY, (err, result) => {
                            if (result) {
                                console.log("result>>>",result)
                                result = JSON.parse(result);
                                dispatch(signInUpdate(result.email));
                                ToastAndroid.show('Thanks For Login.', ToastAndroid.SHORT);
                                Actions.maphome();                    
                                
                            } else {
                                // console.log("signInUpdate==>>Error");
                            }
                        })
                    }
                });

            })
            .catch((error) => {
                var errorMessage = error.message;
                dispatch(ErrorMessageDispatch(errorMessage))
                dispatch(LoadingAction());

            });
    }
}

export function LogOutAction() {
    return dispatch => {
        firebase.auth().signOut()
            .then(() => {
                AsyncStorage.removeItem(STORAGE_KEY);
                dispatch(signInUpdate());
                Actions.login();
            })
            .catch((error) => {
                var errorMessage = error.message;

            });

    }
}


function LoadingAction() {
    return {
        type: actionTypes.LoadingTag
    }
}

function signInUpdate(payload) {
    return {
        type: actionTypes.SiginUpadte,
        payload
    }
}

function ErrorMessageDispatch(payload) {
    return {
        type: actionTypes.ErrorMessages,
        payload
    }
}