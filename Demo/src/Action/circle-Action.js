import actionTypes from '../ActionTypes/actionTypes'
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert, ToastAndroid, Dimensions } from 'react-native';


export function CreateNewGroup(group) {
    return dispatch => {
        var user = firebase.auth().currentUser;
        // console.log(user.uid, '----------------------')
        if (user === '') {
            ToastAndroid.show('First need to login', ToastAndroid.SHORT);
        } else {
            group.Admin = user.uid;
            dispatch(LoadingAction());
            firebase.database().ref('Groups/').push(group)
                .then(() => {
                    dispatch(LoadingAction());
                    ToastAndroid.show('Group Created', ToastAndroid.SHORT);

                    Actions.maphome();
                })
                .catch(() => {
                    dispatch(LoadingAction());

                    ToastAndroid.show('Check Your Connection / Data.', ToastAndroid.SHORT);
                })
        }

    }
}

export function GetGroupsData() {
    return dispatch => {
        // console.log("runing");
        dispatch(LoadingAction());

        firebase.database().ref('Groups/').on('value', (data) => {
            let obj = data.val();
            // obj.nodeKey = data.key;
            // console.log("=>>>>>", obj)
            dispatch(LoadingAction());

            if (obj) {
                dispatch(GroupData(obj));
                Actions.groups();
            }
            else {
                dispatch(LoadingAction());
                ToastAndroid.show('Check Your Connection / Data.', ToastAndroid.SHORT);
            }
        })
    }
}

function LoadingAction() {
    return {
        type: actionTypes.LoadingTag
    }
}


function GroupData(payload) {
    return {
        type: actionTypes.GroupCollection,
        payload
    }
}

function ErrorMessageDispatch(payload) {
    return {
        type: actionTypes.ErrorMessages,
        payload
    }
}