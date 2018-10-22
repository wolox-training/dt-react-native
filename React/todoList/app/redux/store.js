/* import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk';
import {reducer}  from './todoRedux';
/* 
if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger())
  
  require('../config/ReactotronConfig')
}; */

/* eslint-disable no-underscore-dangle */
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle */
/*
const middleware = [thunk];
const reducers = combineReducers({ reducer });
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store; */


import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './Item/reducer';

const middleware = [ thunk ];

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
  require('../config/ReactotronConfig');
}
export default (initialState) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware),
  )
  return store
}