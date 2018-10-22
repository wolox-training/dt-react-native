import {types} from './actions';

const initialState = {
  items: []
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { items } = state;

  switch (type) {
    case types.ADD_ITEM: {
      return {
        ...state,
        items: [{ label: payload, completed: false }, ...items]
      };
    }
    case types.REMOVE_ITEM: {
      return {
        ...state,
        items: items.filter((item, i) => i !== payload)
      };
    }
    case types.TOGGLE_ITEM_COMPLETED: {
      return {
        ...state,
        items: items.map((item, i) => {
          if (i === payload) {
            return { label: item.label, completed: !item.completed };
          }
          return item;
        })
      };
    }
    case types.REMOVE_COMPLETED: {
      return {
        ...state,
        items: items.filter(item => !item.completed)
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
