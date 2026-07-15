import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ToggleThemeButton() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        margin: "20px",
        padding: "10px 20px",
      }}
    >
      Toggle Theme
    </button>
  );
}

export default ToggleThemeButton;
