import * as types from './actions';

const initialState = {
  stepNumber: 0,
  xIsNext: true
};

const reducerGame = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_STEP:
      return {
        ...state,
        stepNumber: action.number,
        xIsNext: action.bool
      };
    default:
      return state;
  }
};

export default reducerGame;
