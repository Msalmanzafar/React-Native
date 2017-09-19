import actionTypes from '../ActionTypes/actionTypes'
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert, ToastAndroid } from 'react-native';


export function NewPatientAdd(PatientInfo) {
    return dispatch => {
        if (PatientInfo.PName === "" || PatientInfo.PName === " ") {
            var name = "Pateint Name is required"
            return dispatch(ErrorMessage(name));
        }
        else if (PatientInfo.FatherName === "" || PatientInfo.FatherName === " ") {
            var Fname = "S/O name is required";
            return dispatch(ErrorMessage(Fname));
        }
        else if (PatientInfo.Age === "" || PatientInfo.Age === " ") {
            var age = "Age is required"
            return dispatch(ErrorMessage(age));
        }
        else if (PatientInfo.Date === "" || PatientInfo.Date === " ") {
            var date = "date is required";
            return dispatch(ErrorMessage(date));
        }
        else if (PatientInfo.TREATMENT === "" || PatientInfo.TREATMENT === " ") {
            var treatment = "Treatment is required";
            return dispatch(ErrorMessage(treatment));
        }
        else if (PatientInfo.OPD === "" || PatientInfo.OPD === " ") {
            var opd = "OPD is required";
            return dispatch(ErrorMessage(opd));
        } else {
            dispatch(LoadingAction());
            dispatch(ErrorMessage());
            var user = firebase.auth().currentUser;
            // console.log('all doctor data')
            firebase.database().ref('PatientsDetails/').push(PatientInfo)
                .then(() => {
                    dispatch(LoadingAction());

                    ToastAndroid.show('Data Saved', ToastAndroid.SHORT);
                    Actions.doctor();
                })
                .catch(() => {
                    dispatch(LoadingAction());

                    ToastAndroid.show('Check Your Connection / Data.', ToastAndroid.SHORT);
                })
        }
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


function DetailsAction(payload) {
    return {
        type: actionTypes.DetailsAction,
        payload
    }
}
function ErrorMessage(payload) {
    return {
        type: actionTypes.ErrorMessages,
        payload
    }
}
function LoadingAction() {
    return {
        type: actionTypes.LoadingTag
    }
}