import { SET_LOGIN, SET_LOGIN_SUCCESS, SET_LOGIN_FAILURE } from './actions';

const initialState = {
  logged: false,
  failure: false,
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        ...{
          logged: false
        }
      };
    case SET_LOGIN_SUCCESS:
      return {
        ...state,
        ...{
          logged: true,
          failure: false,
          user: action.payload
        }
      };
    case SET_LOGIN_FAILURE:
      return {
        ...state,
        ...{
          logged: false,
          failure: true
        }
      };
    default:
      return state;
  }
};

export default reducer;
