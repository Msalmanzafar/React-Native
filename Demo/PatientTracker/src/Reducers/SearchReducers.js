// import {handleActions} from 'redux-actions';
import actionTypes from '../ActionTypes/actionTypes';

const SearchReducers = (state = {
    Loader: false,
    SearchDates: [],
    SearchNames: [],
}, action) => {
    switch (action.type) {
        case actionTypes.SearchByDates: {
            return state = {
                ...state,
                SearchDates: action.payload
            }
        }
        case actionTypes.SearchByNames: {
            return state = {
                ...state,
                SearchNames: action.payload
            }
        }
        case actionTypes.LoadingTag:{
            return state = {
                ...state,
                Loader: !state.Loader,
            }
        }
        default: { }
    }
    return state;
}
export default SearchReducers;
