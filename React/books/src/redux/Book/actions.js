import BookService from '../../services/BookService';

export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';

const actionCreators = {
  getBooks: () => async dispatch => {
    dispatch({ type: GET_BOOKS });
    const response = await BookService.getBooks();
    if (response.ok) {
      dispatch({
        type: GET_BOOKS_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: GET_BOOKS_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionCreators;
