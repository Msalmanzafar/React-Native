// import {handleActions} from 'redux-actions';
import actionTypes from '../ActionTypes/actionTypes';

const DetailsReducers = (state = {
    Details: false,
    PatientsDetails: [],
}, action) => {
    switch (action.type) {
        case actionTypes.DetailsAction: {
            return state = {
                ...state,
                Details: !state.Details,
                PatientsDetails: action.payload
            }
        }

        default: { }
    }
    return state;
}
export default DetailsReducers;
