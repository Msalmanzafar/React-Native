// import {handleActions} from 'redux-actions';
import actionTypes from '../ActionTypes/actionTypes';

const GroupsReducers = (state = {
    GroupData: [],
    grooupMemeber: [],

}, action) => {
    switch (action.type) {
        case actionTypes.SelectedGroup: {
            return state = {
                ...state,
                GroupData: action.payload
            };
        }
        case actionTypes.UserAction: {
            return state = {
                ...state,
                grooupMemeber: action.payload
            }
        }
        default: { }
    }
    return state;
}
export default GroupsReducers;
