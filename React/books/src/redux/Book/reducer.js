import { GET_BOOKS_FAILURE, GET_BOOKS_SUCCESS } from './actions';

const initialState = {
  loading: true,
  listBooks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        listBooks: action.payload
      });
    case GET_BOOKS_FAILURE:
      return Object.assign({}, state, {
        loading: true,
        listBooks: []
      });
    default:
      return state;
  }
};

export default reducer;
