import actionTypes from '../ActionTypes/actionTypes'
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';


export function ButtonSignUpAction(userSignUp) {
    return dispatch => {
        // dispatch(LoadingAction());
        // dispatch(ErrorMessageDispatch())

        Alert.alert(
            "Info..!",
            userSignUp,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]
        )
    }
}



export function ButtonLogInAction(userSignIn) {
    return dispatch => {
        // dispatch(LoadingAction());
        // dispatch(ErrorMessageDispatch())
        // dispatch(signInUpdate(user));
        Alert.alert(
            "Info..!",
            userSignIn,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]
        )

    }
}

export function LogOutAction() {
    return dispatch => {
        Actions.home()

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