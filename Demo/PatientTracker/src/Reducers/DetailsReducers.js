// import {handleActions} from 'redux-actions';
import actionTypes from '../ActionTypes/actionTypes';

const DetailsReducers = (state = {
    Loader: false,
    PatientsDetails: [],
}, action) => {
    switch (action.type) {
        case actionTypes.DetailsAction: {
            return state = {
                ...state,
                PatientsDetails: action.payload
            }
        }
        case actionTypes.LoadingTag:{
            return state={
                ...state,
                Loader: !state.Loader,
            }
        }
        default: { }
    }
    return state;
}
export default DetailsReducers;