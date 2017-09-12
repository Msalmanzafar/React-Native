import actionTypes from '../ActionTypes/actionTypes'
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert, AsyncStorage } from 'react-native';


// const tempArray = [];
export function SearchByDateAction(Search) {
    tempArray = [];
    return dispatch => {
        dispatch(LoadingAction())
        AsyncStorage.getItem('patients', (err, result) => {
            if (result) {
                result = JSON.parse(result);
                for (let i = 0; i < result.length; i++) {
                    if ((result[i].Date === Search)) {
                        this.tempArray = this.tempArray.concat(result[i]);
                    }
                }
                dispatch(SearchActionDates(tempArray));
                dispatch(LoadingAction())

                // console.log(tempArray);

            } else {
                dispatch(LoadingAction())
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

// export function SearchByNamesAction(Search) {
//     tempArray = [];
//     return dispatch => {
//         dispatch(LoadingAction())
//         AsyncStorage.getItem('patients', (err, result) => {
//             if (result) {
//                 result = JSON.parse(result);
//                 for (let i = 0; i < result.length; i++) {
//                     if ((result[i].PName === Search)) {
//                         this.tempArray = this.tempArray.concat(result[i]);
//                     }
//                 }
//                 dispatch(SearchActionNames(tempArray));
//                 dispatch(LoadingAction())

//                 // console.log(tempArray);

//             } else {
//                 dispatch(LoadingAction())
//                 Alert.alert(
//                     'Patient Details',
//                     'List Was Empty',
//                     [
//                         { text: 'OK', onPress: () => console.log('OK Pressed') }
//                     ]
//                 );
//             }
//         })
//     }
// }

function SearchActionDates(payload) {
    return {
        type: actionTypes.SearchByDates,
        payload
    }
}

// function SearchActionNames(payload) {
//     return {
//         type: actionTypes.SearchByNames,
//         payload
//     }
// }

function LoadingAction() {
    return {
        type: {
            type: actionTypes.LoadingTag
        }
    }
}