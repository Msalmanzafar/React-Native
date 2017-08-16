import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/authReducers';
import DetailsReducers from '../Reducers/DetailsReducers';


export default createStore(
    combineReducers({
        AuthReducer,
        DetailsReducers
    }),{},(applyMiddleware(thunk))
);