import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_TO_CART",
            payload: {
              id: Date.now(),
              name: "iPhone",
            },
          })
        }
      >
        Add Item
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "CLEAR_CART",
          })
        }
      >
        Clear Cart
      </button>

      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name}

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item.id,
                })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
