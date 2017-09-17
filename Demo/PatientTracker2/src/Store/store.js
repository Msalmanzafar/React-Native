import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/authReducers';
import DetailsReducers from '../Reducers/DetailsReducers';
import SearchReducers from '../Reducers/SearchReducers';

export default createStore(
    combineReducers({
        AuthReducer,
        DetailsReducers,
        SearchReducers
    }),{},(applyMiddleware(thunk))
);