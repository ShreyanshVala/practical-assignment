import React, { useReducer } from "react";

// Initial State
const initialState = 0;

// Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>

      <button
        onClick={() => dispatch({ type: "decrement" })}
        style={{ margin: "0 10px" }}
      >
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
