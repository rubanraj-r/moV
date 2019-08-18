import React from 'react';
import ReactDOM from 'react-dom';
import routes from './route.jsx';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {routes()}
  </Provider>,
  document.getElementById('app')
);
