import React, { useReducer } from "react";

const initialState = 1;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state > 0 ? state - 1 : state;

    case "reset":
      return initialState;

    default:
      return state;
  }
}

function CartItem() {
  const [quantity, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        width: "350px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>Flipkart Cart Item</h2>

      <h3>Apple iPhone 16</h3>

      <h2>Quantity: {quantity}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>+</button>

      <button
        onClick={() => dispatch({ type: "decrement" })}
        disabled={quantity === 0}
        style={{ margin: "0 10px" }}
      >
        -
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CartItem;
