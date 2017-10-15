import actionTypes from '../ActionTypes/actionTypes'
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Alert, ToastAndroid, Dimensions } from 'react-native';



export function JoinGroupAction(joining) {
    let flag = false;
    return dispatch => {
        // console.log("runing", joining);
        let currentUserId = firebase.auth().currentUser.uid;
        // console.log('currentUser', currentUserId);
        // let members = {
        //     Uid: currentUserId
        // }
        firebase.database().ref('Groups/').once('value', (data) => {
            let obj = data.val();
            obj.groupId = data.key;
            // console.log("=>>>>>", obj)
            let nodeKey;
            for (var key in obj) {
                if (joining.joinKey === key.slice(key.length - 5)) {
                    flag = true;
                    nodeKey = key;
                    firebase.database().ref('Groups/' + nodeKey + '/members/').push(currentUserId)
                        .then((members) => {
                            ToastAndroid.show('You are added', ToastAndroid.SHORT);
                        })
                }
            }
            if (flag == false) {
                ToastAndroid.show('Please enter your group key', ToastAndroid.SHORT);
            }

            // console.log("nodeKey", nodeKey)
        })

    }
}

export function memberActions(GroupId) {
    return dispatch => {
        let members = [];
        firebase.database().ref('Groups/' + GroupId + '/members/').once('value', (membersData) => {
            let membersVal = membersData.val();
            // console.log("membersVal", membersVal);
            let usersData = [];
            let membersCount = Object.keys(membersVal).length;
            // console.log(membersCount, 'membersCountmembersCount');
            let user = firebase.auth().currentUser;
            firebase.database().ref("Groups/" + GroupId + '/').once("value", (currentUserData) => {
                let currentUser = currentUserData.val();

                // console.log("Groups", currentUser);

                firebase.database().ref("users/" + currentUser.Admin + '/').once("value", (userData) => {
                    let user = userData.val();
                    usersData.push(user);
                    if (usersData.length === membersCount + 1) {
                        dispatch(UserActionDispatch(usersData));
                    }
                })

            })
            for (var key in membersVal) {
                firebase.database().ref("users/" + membersVal[key] + '/').once("value", (userData) => {
                    let user = userData.val();
                    usersData.push(user);
                    // console.log("Users", user);
                    if (usersData.length === membersCount + 1) {
                        dispatch(UserActionDispatch(usersData));
                    }
                    // dispatch(UserActionDispatch(members));
                })
            }
        })
    }
}
function LoadingAction() {
    return {
        type: actionTypes.LoadingTag
    }
}
function UserActionDispatch(payload) {
    return {
        type: actionTypes.UserAction,
        payload
    }
}
function JoinGroupDispatch(payload) {
    return {
        type: actionTypes.joinGroupDispatch,
        payload
    }
}