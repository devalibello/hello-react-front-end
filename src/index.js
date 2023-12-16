import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';
import App from './App';

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
