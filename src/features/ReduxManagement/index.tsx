import React from 'react';
import { Provider } from 'react-redux';

// @ts-ignore
import store from './store';
import App from './App';

const ReduxManagement = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ReduxManagement;
