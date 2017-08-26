import actionTypes from '../ActionTypes/actionTypes'
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';


export function NewPatientAdd(PatientInfo) {
    return dispatch => {
        var user = firebase.auth().currentUser;
        // console.log('all doctor data')
        if (user !== null) {
            firebase.database().ref('PatientsDetails/').push(PatientInfo)
                .then(() => {
                    Alert.alert(
                        'Alert..!',
                        'Data Saved',
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') }
                        ]
                    )
                    Actions.doctor();
                })
                .catch(() => {
                    Alert.alert(
                        'Alert..!',
                        'Check your internet connection',
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') }
                        ]
                    )
                })
        } else {
            Alert.alert(
                'Alert..!',
                'Check your internet connection',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ]
            )
        }
    }
}

export function PatientDetailsAction() {
    return dispatch => {
        firebase.database().ref('PatientsDetails/').on('value', (data) => {
            let obj = data.val();

            // let SuposeArray = [];
            // let localArray = [];
            // for (var prop in obj) {
            //     obj[prop].prokey = prop;
            //     SuposeArray.push(obj[prop])
            // }
            // for (var i = 0; i < SuposeArray.length; i++) {
            //     if (SuposeArray[i].StoreKey === keys) {
            //         localArray.push(SuposeArray[i])
            //     }
            // }
            console.log('out side===', obj)
            dispatch(DetailsAction(obj));

        })
    }
}

function DetailsAction(payload) {
    return {
        type: actionTypes.DetailsAction,
        payload
    }
}


