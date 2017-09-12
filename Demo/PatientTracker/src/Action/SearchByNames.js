import actionTypes from '../ActionTypes/actionTypes'
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert, AsyncStorage } from 'react-native';


export function SearchByNamesAction(Search) {
    tempArray = [];
    flag = 0;
    return dispatch => {
        dispatch(LoadingAction())
        AsyncStorage.getItem('patients', (err, result) => {
            if (result) {
                result = JSON.parse(result);
                for (let i = 0; i < result.length; i++) {
                    if ((result[i].PName === Search)) {
                        this.tempArray = this.tempArray.concat(result[i]);
                        flag=1;
                    }
                }
                dispatch(SearchActionNames(tempArray));
                dispatch(LoadingAction())
                if(flag === 0) {
                    dispatch(LoadingAction())
                    Alert.alert(
                        'Patient Details',
                        'List Was Empty',
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') }
                        ]
                    );
                }
                // console.log(tempArray);

            } 
        })
    }
}
function SearchActionNames(payload) {
    return {
        type: actionTypes.SearchByNames,
        payload
    }
}

function LoadingAction() {
    return {
        type: {
            type: actionTypes.LoadingTag
        }
    }
}