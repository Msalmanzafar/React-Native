import actionTypes from '../ActionTypes/actionTypes'
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert, AsyncStorage } from 'react-native';


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
            AsyncStorage.getItem('patients', (err, result) => {
                result = JSON.parse(result)
                if (result && Array.isArray(result)) {
                    result = result.concat(PatientInfo)
                } else {
                    result = [PatientInfo]
                }

                AsyncStorage.setItem('patients', JSON.stringify(result), (err, result) => {
                    if (err) {
                        Alert.alert(
                            'Medico',
                            'Your data is to bad',
                            [
                                { text: 'OK', onPress: () => console.log('OK Pressed') }
                            ]
                        )
                    }
                    else {
                        Alert.alert(
                            'Medico',
                            'Data Saved..!',
                            [
                                { text: 'OK', onPress: () => console.log('OK Pressed') }
                            ]
                        )

                    }
                });
                // console.log(result, "results")
            })
        }
    }
}

export function PatientDetailsAction() {
    // console.log("details.....")
    return dispatch => {
        dispatch(LoadingAction())
        AsyncStorage.getItem('patients', (err, result) => {
            if (result) {
                result = JSON.parse(result);
                dispatch(LoadingAction());
                dispatch(DetailsAction(result));
                // console.log(result)
            } else {
                dispatch(LoadingAction());
                Alert.alert(
                    'Patient Details',
                    'List Was Empty',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') }
                    ]
                );
            }
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




