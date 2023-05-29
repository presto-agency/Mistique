import { combineReducers } from '@reduxjs/toolkit';
import toggleReducer from './reducers/toggleSlice';
import heroReducer from './reducers/heroContent';

const rootReducer = combineReducers({
  toggle: toggleReducer,
  heroContent: heroReducer
});

export default rootReducer;