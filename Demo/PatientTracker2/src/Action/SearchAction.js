import actionTypes from '../ActionTypes/actionTypes'
// import * as firebase from 'firebase';
// import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';


export function SearchByDateActions(Search) {
    return dispatch => {
        // dispatch(LoadingAction())
        // dispatch(SearchDate(data));
        Alert.alert(
            "Alert..!",
            Search,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]
        )

    }
}

export function SearchByNamesActions(Search) {
    return dispatch => {
        // dispatch(LoadingAction());
        // dispatch(SearchNames(obj));

        Alert.alert(
            "Alert..!",
            Search,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]
        )
    }
}

function SearchDate(payload) {
    return {
        type: actionTypes.SearchByDateAction,
        payload
    }
}
function SearchNames(payload) {
    return {
        type: actionTypes.SearchByNmaesAction,
        payload
    }
}
function LoadingAction() {
    return {
        type: actionTypes.LoadingTag
    }
}