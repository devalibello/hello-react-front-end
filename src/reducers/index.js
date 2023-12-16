import { combineReducers } from '@reduxjs/toolkit';
import greetingReducer from './greetingReducer';

const rootReducer = {
  greeting: greetingReducer,
};

export default combineReducers(rootReducer);
