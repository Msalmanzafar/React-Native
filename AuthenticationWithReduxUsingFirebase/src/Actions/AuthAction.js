
import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';

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
        dispatch(LoaderDispatch())                
        firebase.auth().signOut()
            .then(() => {
                dispatch(LoaderDispatch())
                dispatch(userSignInUpdate())
                console.log('success');
            }).catch((error) => {
                dispatch(LoaderDispatch())                                
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
