import actionTypes from '../ActionTypes/actionTypes'
import { Alert, ToastAndroid } from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux';


export function NewPatientAdd(PatientInfo) {
    return dispatch => {
        // console.log("data=>>>",PatientInfo);
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
            return axios.post('https://patients-tracker.herokuapp.com/addpatient', PatientInfo)
                .then(() => {
                    dispatch(LoadingAction());

                    ToastAndroid.show('Data Saved', ToastAndroid.SHORT);

                    Actions.doctor();
                })
                .catch((err) => {
                    dispatch(LoadingAction());

                    ToastAndroid.show('Check Your Connection / Data.', ToastAndroid.SHORT);
                });
        }

    }
}

export function PatientDetailsAction() {
    return dispatch => {
        dispatch(LoadingAction());
        return axios.get('https://patients-tracker.herokuapp.com/Details')
            .then((data) => {
                dispatch(LoadingAction());
                // console.log("data=>>",data.data)
                
                dispatch(DetailsAction(data.data));
            })
            .catch((err) => {
                dispatch(LoadingAction());
                
                ToastAndroid.show('Check Your Connection / Data.', ToastAndroid.SHORT);
                
            });

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