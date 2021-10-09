import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import fetchDetailsReducer from './fetchDetailsReducer';
import pageToViewReducer from './pageToViewReducer';

export default combineReducers({
 simpleReducer,
 fetchDetailsReducer,
 pageToViewReducer,
});