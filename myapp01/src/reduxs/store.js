import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

function reducer(state, action) {
  if (state === undefined) {
    return { number: 0 };
  }

  const newState = { ...state };
  if (action.type === "INCREMENT") newState.number++;
  return newState;
}

export const store = createStore(reducer, composeWithDevTools());
