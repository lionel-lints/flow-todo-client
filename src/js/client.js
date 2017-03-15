import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import logger from 'redux-logger';

import reducer from './reducers';
import App from './containers/App';
import store from './store';



/*
store.subscribe(() => {
  console.log('new store!', store.getState());
});
store.dispatch({type:'ADD_TODO', text: 'a stromgkl'});
store.dispatch({type:'ADD_TODO', text: 'another a stromgkl'});
store.dispatch({type:'ADD_TODO', text: 'hello friend'});
store.dispatch({type:'ADD_TODO', text: 'a thingy thing.'});
*/

// async actions take a function which takes a dispatch
  /*store.dispatch((dispatch) => {
  dispatch({ type: "FETCH_USER_START" });

  // do a fetch here.

  dispatch({ type: "FETCH_USER_START" });
  });*/

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
