import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function UpdateName() {
  const [name, setName] = useState("");

  const { state, dispatch } = useContext(AuthContext);

  if (!state.isLoggedIn) return null;

  return (
    <div>
      <input
        type="text"
        placeholder="Enter New Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_NAME",
            payload: name,
          })
        }
      >
        Update Name
      </button>
    </div>
  );
}

export default UpdateName;
