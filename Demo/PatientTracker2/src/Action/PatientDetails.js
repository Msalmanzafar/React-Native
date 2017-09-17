import actionTypes from '../ActionTypes/actionTypes'
import { Alert } from 'react-native';
import axios from 'axios'

export function NewPatientAdd(PatientInfo) {
    return dispatch => {
        // console.log(PatientInfo)
        return axios.post('http://localhost:3001/addpatient', PatientInfo)
            .then((data) => {
                Alert.alert(data)
                // dispatch(Addpatient.addData(userObj))
            })
            .catch((err) => console.log(err));
    }
}

export function PatientDetailsAction() {
    return dispatch => {
        // dispatch(LoadingAction());
        // dispatch(DetailsAction(obj));
        Alert.alert(
            "Info..!",
            'Details Get',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]
        )

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