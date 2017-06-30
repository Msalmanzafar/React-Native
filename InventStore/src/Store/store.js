import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/authReducer';



export default createStore(
    combineReducers({
        AuthReducer,
    }),{},(applyMiddleware(thunk))
);