import actionTypes from '../ActionTypes/actionTypes'
import * as firebase from 'firebase';
// import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';


export function SearchByDateActions(Search) {
    return dispatch => {
        dispatch(LoadingAction())
        firebase.database().ref('PatientsDetails/').orderByChild('Date').equalTo(Search).on('value', (snap) => {
            let data = snap.val()
            if (data) {
                dispatch(SearchDate(data));
                dispatch(LoadingAction());
            } else {
                dispatch(LoadingAction());
                Alert.alert(
                    "Alert..!",
                    "No Record Found",
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') }
                    ]
                )
            }
        })
    }
}

export function SearchByNamesActions(Search) {
    return dispatch => {
        dispatch(LoadingAction());
        firebase.database().ref('PatientsDetails/').orderByChild('PName').equalTo(Search).on('value', (snap) => {
            let obj = snap.val()
            if (obj) {
                dispatch(SearchNames(obj));
                dispatch(LoadingAction());
            } else {
                dispatch(LoadingAction())
                Alert.alert(
                    "Alert..!",
                    "No Record Found",
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') }
                    ]
                )
            }
        })
    }
}

function SearchDate(payload) {
    return {
        type: actionTypes.SearchByDateAction,
        payload
    }
}
function SearchNames(payload) {
    return {
        type: actionTypes.SearchByNmaesAction,
        payload
    }
}
function LoadingAction() {
    return {
        type: actionTypes.LoadingTag
    }
}