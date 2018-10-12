import { SET_LOGIN, SET_LOGIN_SUCCESS, SET_LOGIN_FAILURE } from './actions';

const initialState = {
  logged: false,
  failure: false,
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return Object.assign({}, state, {
        logged: false
      });
    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        logged: true,
        failure: false,
        user: action.payload
      });
    case SET_LOGIN_FAILURE:
      return Object.assign({}, state, {
        logged: false,
        failure: true
      });
    default:
      return state;
  }
};

export default reducer;

/* 
const initialState = {
  pending: true,
  logged: false
};

const loggedUserReducer = (state = initialState, action) => {
  if (action.type === 'GET_LOGGED_USER') {
    return Object.assign({}, state, {
      pending: false
    });
  }

  if (action.type === 'SET_LOGGED_USER') {
    return Object.assign({}, state, {
      pending: false,
      logged: action.logged
    });
  }

  return state;
}; */
