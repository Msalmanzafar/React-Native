import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/authReducer';
import CreateStore from '../Reducers/CreateStoreReducers';



export default createStore(
    combineReducers({
        AuthReducer,
        CreateStore,
    }),{},(applyMiddleware(thunk))
);