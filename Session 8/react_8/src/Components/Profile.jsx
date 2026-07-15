import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <div>
      {state.isLoggedIn ? (
        <>
          <h2>Welcome {state.user.name}</h2>

          <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
        </>
      ) : (
        <button
          onClick={() =>
            dispatch({
              type: "LOGIN",
              payload: {
                name: "Shreyansh",
              },
            })
          }
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Profile;
