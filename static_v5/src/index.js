import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import app from './reducers';
import { fetchClusters } from './actions';
import App from './components/App';

const store = createStore(
  app,
  applyMiddleware(
    thunkMiddleware
  )
);

store.dispatch(fetchClusters());

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));
