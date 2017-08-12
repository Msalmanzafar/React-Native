import actionTypes from '../ActionTypes/actionTypes'
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import myDB from '../Component/AsynStorage/DataStorage'
var myDBInstance = new myDB();

export function PatientDetailsAction() {
    return dispatch => {
        myDBInstance.getTheItem(key, function (value) {
            // Alert.alert('Fetch', 'Your Value is - ' + value);
            dispatch(DetailsAction(value));
            Actions.patientsDetails();
                // console.log("Data Value", value);

        });
    }
}

function DetailsAction(payload) {
    return {
        type: actionTypes.DetailsAction,
        payload
    }
}