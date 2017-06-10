
import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';
import {Actions} from 'react-native-router-flux'

export function SignInAction(userLogin) {
    return dispatch => {
        console.log("user Action---", userLogin);
        dispatch(LoaderDispatch())        
        firebase.auth()
            .signInWithEmailAndPassword(userLogin.email, userLogin.password)
            .then((user) => {
                dispatch(LoaderDispatch())
                dispatch(AuthErrors());                
                dispatch(userSignInUpdate(user));
                Actions.main();
            })
            .catch((error) => {
                // console.log("error",error.message)
                let message = error.message;
                dispatch(LoaderDispatch())
                dispatch(AuthErrors(message));
            });
    }
}

export function LogOutAction() {
    return dispatch => {
        firebase.auth().signOut()
            .then(() => {
                Actions.Auth();
                // dispatch(userSignInUpdate())
                console.log('success');
            }).catch((error) => {
                console.log(error.message);
            });
    }
}

function userSignInUpdate(payload) {
    return {
        type: ActionTypes.SiginUpadte,
        payload
    }
}

function AuthErrors(payload) {
    return {
        type: ActionTypes.AuthErrors,
        payload
    }
}

function LoaderDispatch() {
    return {
        type: ActionTypes.LoaderActions,
    }
}
