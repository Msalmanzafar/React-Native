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
                SearchDate: action.payload
            }
        }
        case actionTypes.SearchByNmaesAction: {
            return state = {
                ...state,
                SearchNames: action.payload
            }
        }
        case actionTypes.LoadingTag:{
            return state={
                ...state,
                Loading: !state.Loading,
            }
        }
        default: { }
    }
    return state;
}
export default SearchReducers;
