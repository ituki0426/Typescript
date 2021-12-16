import React, { useCallback } from "react";
import reducer, { decrementType, incrementType } from "./reducer";

const initialState = { count: 0 };
const Counter = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const decrement = useCallback(() => dispatch({ type: decrementType }), []);
  const increment = useCallback(() => dispatch({ type: incrementType }), []);
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
