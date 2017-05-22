import {createStore,combineReducers,applyMiddleware} from 'redux';
import AuthReducer from '../Reducers/authReducer'

export default createStore(
    combineReducers({
        AuthReducer,
    }),{},(applyMiddleware(thunk))
);