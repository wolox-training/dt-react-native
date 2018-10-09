import { createStore, combineReducers } from 'redux';

import game from './Game/reducer';

const store = createStore(
  combineReducers({
    game
  })
);

export default store;
