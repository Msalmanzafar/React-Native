import actionTypes from '../ActionTypes/actionTypes'
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert,AsyncStorage } from 'react-native';
// import myDB from '../Component/AsynStorage/DataStorage'
// var myDBInstance = new myDB();

// const Array=[];

export function NewPatientAdd(PatientInfo) {
    return dispatch => {
        AsyncStorage.getItem('patients', (err, result) => {
                result = JSON.parse(result)
                if (result && Array.isArray(result)) {
                    result = result.concat(PatientInfo)
                } else {
                    result = [PatientInfo]
                }

                AsyncStorage.setItem('patients', JSON.stringify(result), (err,result) => {
                    if(err){
                        Alert.alert(
                            'Medico',
                            'Your data is to bad',
                            [
                                {text: 'OK', onPress: () => console.log('OK Pressed')}
                            ]
                        )
                    }
                    else{
                        Alert.alert(
                            'Medico',
                            'Data Saved..!',
                            [
                                {text: 'OK', onPress: () => console.log('OK Pressed')}
                            ]
                        )
                        
                    }
                });
                // console.log(result, "results")
            })
    }
}

export function PatientDetailsAction() {
    // console.log("details.....")
    return dispatch => {
         AsyncStorage.getItem('patients', (err, result) => {
            if(result){
                dispatch(DetailsAction(result));
                // console.log(result)
            }else{
                Alert.alert(
                    'Patient Details',
                    'List Was Empty',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')}
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



            // AsyncStorage.getItem('patients', (err, result) => {
            //     result = JSON.parse(result)
            //     if (result && Array.isArray(result)) {
            //         result = result.concat(data)
            //     } else {
            //         result = [data]
            //     }

            //     AsyncStorage.setItem('patients', JSON.stringify(result), () => {
            //     });
            //     dispatch({
            //         type: Addpatient.ADDDATA,
            //         payload: result
            //     })
            //     console.log(result, "results")
            // })
            //console.log(result, "data");

  