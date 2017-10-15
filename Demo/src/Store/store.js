import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/authReducers';

export default createStore(
    combineReducers({
        AuthReducer,
    }),{},(applyMiddleware(thunk))
);