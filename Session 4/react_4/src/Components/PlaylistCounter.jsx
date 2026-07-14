import React, { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      // Prevent negative count
      return state > 0 ? state - 1 : state;

    case "reset":
      return initialState;

    default:
      return state;
  }
}

function PlaylistCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Playlist Counter</h1>

      <h2>Songs in Playlist: {count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>

      <button
        onClick={() => dispatch({ type: "decrement" })}
        disabled={count === 0}
      >
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default PlaylistCounter;
