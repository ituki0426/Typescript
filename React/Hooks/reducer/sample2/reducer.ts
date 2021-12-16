import React from "react";

export const incrementType = Symbol("increment");
export const decrementType = Symbol("decrement");
type STORE = { count: number };
type ACTIONTYPE =
  | { type: typeof incrementType }
  | { type: typeof decrementType };
const reducer: React.Reducer<STORE, ACTIONTYPE> = (state, action) => {
  switch (action.type) {
    case incrementType:
      return { count: state.count + 1 };
    case decrementType:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default reducer;
