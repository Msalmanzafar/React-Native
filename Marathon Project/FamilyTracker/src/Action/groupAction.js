import actionTypes from '../ActionTypes/actionTypes'
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert, ToastAndroid, Dimensions } from 'react-native';



export function OpenGroupAction(GroupId) {
    return dispatch => {
        // console.log("runing", GroupId);
        // dispatch(LoadingAction());

        firebase.database().ref('Groups/' + GroupId + '/').on('value', (data) => {
            let obj = data.val();
            obj.groupId = data.key;
            dispatch(SeletedGroupData(obj));
            let currentUser = firebase.auth().currentUser.uid;
            if (obj.Admin === currentUser) {
                Actions.adminright();
            } else {
                Actions.groupJoin()
            }


            // ToastAndroid.show('Check Your Connection / Data.', ToastAndroid.SHORT);
        })
    }
}

function LoadingAction() {
    return {
        type: actionTypes.LoadingTag
    }
}

function SeletedGroupData(payload) {
    return {
        type: actionTypes.SelectedGroup,
        payload
    }
}