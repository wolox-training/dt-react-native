import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import game from './Game/reducer';
import login from './Login/reducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle */

const reducers = combineReducers({ game, login, form: formReducer });
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
