import { GET_BOOKS_FAILURE, GET_BOOKS_SUCCESS, GET_BOOKS } from './actions';

const initialState = {
  loading: true,
  listBooks: [],
  failure: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return Object.assign({}, state, {
        loading: true,
        failure: false
      });
    case GET_BOOKS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        listBooks: action.payload
      });
    case GET_BOOKS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        listBooks: [],
        failure: true
      });
    default:
      return state;
  }
};

export default reducer;
