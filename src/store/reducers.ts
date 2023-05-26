import { combineReducers } from '@reduxjs/toolkit';
import toggleReducer from './reducers/toggleSlice';

const rootReducer = combineReducers({
  toggle: toggleReducer,
});

export default rootReducer;