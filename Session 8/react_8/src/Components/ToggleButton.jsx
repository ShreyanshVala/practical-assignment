import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ToggleButton() {
  const { dispatch } = useContext(ThemeContext);

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      style={{
        padding: "10px 20px",
        marginTop: "20px",
      }}
    >
      Toggle Theme
    </button>
  );
}

export default ToggleButton;
