import actionTypes from '../ActionTypes/actionTypes'
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';


export function NewPatientAdd(PatientInfo) {
    return dispatch => {
        var user = firebase.auth().currentUser;
        // console.log('all doctor data')
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

    }
}

export function PatientDetailsAction() {
    return dispatch => {
        dispatch(LoadingAction());
        firebase.database().ref('PatientsDetails/').on('value', (data) => {
            let obj = data.val();
            dispatch(LoadingAction());
            dispatch(DetailsAction(obj));

        })
    }
}

// export function PatientDeleteAction(IdKeys) {
//     return dispatch => {
//         firebase.database.ref('PatientsDetails/' + IdKeys + '/').child().remove()
//             .then(() => {
//                 Alert.alert(
//                     "Alert..!",
//                     "Data Deleted.",
//                     [
//                         { text: 'OK', onPress: () => console.log('OK Pressed') }
//                     ]
//                 )
//             })
//             .catch(()=>{
//                 Alert.alert(
//                     "Alert..!",
//                     "Make Sure Wifi or Data Enabled.",
//                     [
//                         { text: 'OK', onPress: () => console.log('OK Pressed') }
//                     ]
//                 )
//             })
//     }
// }
function DetailsAction(payload) {
    return {
        type: actionTypes.DetailsAction,
        payload
    }
}

function LoadingAction() {
    return {
        type: actionTypes.LoadingTag
    }
}