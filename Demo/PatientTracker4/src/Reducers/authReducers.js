// import {handleActions} from 'redux-actions';
import actionTypes from '../ActionTypes/actionTypes';

const AuthReducer = (state = {
    loading: false,
    auth: false,
    authSignIn: [],
    ErrorMess: '',
}, action) => {
    switch (action.type) {
        case actionTypes.LoadingTag:{
            return state={
                ...state,
                loading: !state.loading,
            }
        }
        case actionTypes.SiginUpadte: {
            return state = {
                ...state,
                auth: !state.auth,
                authSignIn: action.payload
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
export default AuthReducer;
