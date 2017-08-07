import actionTypes from '../ActionTypes/actionTypes'
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';


export function ButtonSignUpAction(userSignUp) {
    return dispatch => {
        dispatch(LoadingAction());
        firebase.auth().createUserWithEmailAndPassword(userSignUp.email, userSignUp.password)
            .then(() => {
                Alert.alert(
                    'Medico Alert',
                    'Thanks for Sign Up',
                    [
                        { text: 'OK' },
                    ]
                )
                dispatch(LoadingAction());
                Actions.login();
                dispatch(ErrorMessageDispatch())                
            })
            .catch((error) => {
                var errorMessage = error.message;
                dispatch(ErrorMessageDispatch(errorMessage))
                dispatch(LoadingAction());
            })
    }
}



export function ButtonLogInAction(userSignIn) {
    return dispatch => {
        dispatch(LoadingAction());

        firebase.auth()
            .signInWithEmailAndPassword(userSignIn.email, userSignIn.password)
            .then((user) => {
                // console.log('userSignIn',user.email);
                dispatch(signInUpdate(user));
                dispatch(LoadingAction());
                dispatch(ErrorMessageDispatch())                
                
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                dispatch(ErrorMessageDispatch(errorMessage))
                dispatch(LoadingAction());

            });
    }
}

export function LogOutAction() {
    return dispatch => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            dispatch(signInUpdate());
        }).catch((error) => {
            var errorMessage = error.message;
            Alert.alert(
                    'Medico Alert',
                    errorMessage,
                    [
                        { text: 'OK' },
                    ]
                )// An error happened.
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