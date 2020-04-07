import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import errorReducer from './reducers/errorReducer';

const store = createStore(combineReducers({ userReducer, errorReducer }));

export default store;
