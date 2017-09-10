// import {handleActions} from 'redux-actions';
import actionTypes from '../ActionTypes/actionTypes';

const SearchReducers = (state = {
    SearchDate: [],
    SearchNames:[],
    Loading: false,
}, action) => {
    switch (action.type) {
        case actionTypes.SearchByDateAction: {
            return state = {
                ...state,
                Loading: !state.Loading,
                SearchDate: action.payload
            }
        }
        case actionTypes.SearchByNmaesAction: {
            return state = {
                ...state,
                Loading: !state.Loading,
                SearchNames: action.payload
            }
        }
        default: { }
    }
    return state;
}
export default SearchReducers;
