import actionTypes from '../ActionTypes/actionTypes'
import { Alert, ToastAndroid } from 'react-native';
import axios from 'axios';

export function SearchByDateActions(Search) {
    let flag = false;
    return dispatch => {
        dispatch(LoadingAction())
        return axios.get('https://patients-tracker.herokuapp.com/Details')
            .then((data) => {
                let obj = data.data;
                dispatch(LoadingAction());
                // console.log("data=>>", data.data)
                var batKicks = [];

                for (var i = 0; i < obj.length; i++) {
                    if (obj[i].Date === Search) {
                        batKicks.push(obj[i]);
                        flag = true;
                    }
                }
                if (flag === false) {
                    ToastAndroid.show('Selected data not found.', ToastAndroid.SHORT);
                }
                dispatch(SearchDate(batKicks));

            })
            .catch((err) => {
                dispatch(LoadingAction())

                ToastAndroid.show('Check Your Connection / Data.', ToastAndroid.SHORT);

            });

    }
}

export function SearchByNamesActions(Search) {
    let flag = false;
    return dispatch => {
        dispatch(LoadingAction())
        return axios.get('https://patients-tracker.herokuapp.com/Details')
            .then((data) => {
                let objs = data.data;
                dispatch(LoadingAction());
                // console.log("data=>>", data.data)
                var batKicksName = [];
                
                for (var i = 0; i < objs.length ; i++) {
                    if (objs[i].PName === Search) {
                        batKicksName.push(objs[i]);
                        flag = true;
                    }
                }
                if (flag === false) {
                    ToastAndroid.show('Selected data not found.', ToastAndroid.SHORT);
                }
                dispatch(SearchNames(batKicksName));

            })
            .catch((err) => {
                dispatch(LoadingAction())

                ToastAndroid.show('Check Your Connection / Data.', ToastAndroid.SHORT);

            });

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