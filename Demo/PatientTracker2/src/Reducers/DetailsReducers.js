// import {handleActions} from 'redux-actions';
import actionTypes from '../ActionTypes/actionTypes';

const DetailsReducers = (state = {
    Details: false,
    PatientsDetails: [],
    Load: false,
}, action) => {
    switch (action.type) {
        case actionTypes.DetailsAction: {
            return state = {
                ...state,
                Details: !state.Details,
                PatientsDetails: action.payload
            }
        }
        case actionTypes.LoadingTag:{
            return state ={
                ...state,
                Load: !state.Load,
            }
        }
        default: { }
    }
    return state;
}
export default DetailsReducers;
