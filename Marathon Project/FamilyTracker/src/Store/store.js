import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/authReducers';
import NewGroupReducers from '../Reducers/circleReducers';
import GroupsReducers from '../Reducers/groupsReducers'

export default createStore(
    combineReducers({
        AuthReducer,
        NewGroupReducers,
        GroupsReducers
    }),{},(applyMiddleware(thunk))
);