import { GET_BOOKS_FAILURE, GET_BOOKS_SUCCESS } from './actions';

const initialState = {
  text: 'Cargando...'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return Object.assign({}, state, {
        text: JSON.stringify(action.payload)
      });
    case GET_BOOKS_FAILURE:
      return Object.assign({}, state, {
        text: JSON.stringify(action.payload)
      });
    default:
      return state;
  }
};

export default reducer;
