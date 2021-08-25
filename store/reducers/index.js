import { combineReducers } from "redux";
import userReducer from './userReducer.js';
import tokenReducer from './tokenReducer.js';

const reducers = combineReducers({
    user: userReducer,
    token: tokenReducer,
});

export default reducers;