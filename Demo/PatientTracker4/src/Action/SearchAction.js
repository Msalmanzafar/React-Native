import actionTypes from '../ActionTypes/actionTypes'
import * as firebase from 'firebase';
// import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';


export function SearchByDate(Search) {
    return dispatch => {
        // dispatch(SearchDate())        
        firebase.database().ref('PatientsDetails/').orderByChild('Date').equalTo(Search).on('value', (snap) => {
            let data = snap.val()
            if (data) {
                dispatch(SearchDate(data))
            } else {
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

export function SearchByNames() {
    return dispatch => {
        firebase.database().ref('PatientsDetails/').orderByChild('PName').equalTo(Search).on('value', (snap) => {
            let obj = snap.val()
            if (obj) {
                dispatch(SearchDate(obj))
            } else {
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
function SearchNames(payload){
    return {
        type: actionTypes.SearchByNmaesAction,
        payload
    }
}