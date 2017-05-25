
import ActionTypes from './ActionTypes';
import * as firebase from 'firebase';

export function SignInAction(userLogin) {
    return dispatch => {
        console.log("user Action---", userLogin);
        firebase.auth()
            .signInWithEmailAndPassword(userLogin.email, userLogin.password)
            .then((user) => {
                alert('thanks')
                dispatch(userSignInUpdate(user));
            })
            .catch((error) => {
                console.log("error",error.message)
            });
    }
}

export function LogOutAction() {
    return dispatch => {
        firebase.auth().signOut()
            .then(() => {
                dispatch(userSignInUpdate())
                console.log('success');
            }).catch((error) => {
                console.log(error);
            });
    }
}

function userSignInUpdate(payload) {
    return {
        type: ActionTypes.SiginUpadte,
        payload
    }
}

// function AuthErrors(payload) {
//     return {
//         type: ActionTypes.AuthErrors,
//         payload
//     }
// }

// function LoaderDispatch() {
//     return {
//         type: ActionTypes.LoaderActions,
//     }
// }
