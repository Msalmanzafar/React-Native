// import {handleActions} from 'redux-actions';
import actionTypes from '../ActionTypes/actionTypes';

const NewGroupReducers = (state = {
    loading: false,
    newGroup: [],
    ErrorMess: '',
}, action) => {
    switch (action.type) {
        case actionTypes.LoadingTag:{
            return state={
                ...state,
                loading: !state.loading,
            }
        }
        case actionTypes.GroupCollection: {
            return state = {
                ...state,
                newGroup: action.payload
            };
        }
        case actionTypes.ErrorMessages: {
            return state = {
                ...state,
                ErrorMess: action.payload
            };
        }
        default: { }
    }
    return state;
}
export default NewGroupReducers;
