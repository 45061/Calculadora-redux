import {createStore} from 'redux'

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const MULTIPLY = "MULTIPLY"
export const DIVIDE = "DIVIDE"

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 2,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 2,
      };
    case MULTIPLY:
      return {
        ...state,
        count: state.count * 2,
      };
    case DIVIDE:
      return {
        ...state,
        count: state.count ? state.count / 2 : state.count,
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
}

export const store = createStore(reducer, initialState)