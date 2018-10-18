import LoginService from '../../services/LoginService';

export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
export const SET_LOGIN_FAILURE = 'SET_LOGIN_FAILURE';

const actionCreators = {
  login: (email, pass) => async dispatch => {
    dispatch({ type: SET_LOGIN });
    const response = await LoginService.login(email, pass);
    if (response.ok && response.data.length > 0) {
      LoginService.saveStateToLocalStorage('1234');
      dispatch({
        type: SET_LOGIN_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: SET_LOGIN_FAILURE,
        payload: response.problem
      });
    }
  },
  logged: () => ({ type: SET_LOGIN_SUCCESS })
};

export default actionCreators;
