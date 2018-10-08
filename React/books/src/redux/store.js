import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import book from './Book/reducer';
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle */
const store = createStore(
  combineReducers({
    book
  }),
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
