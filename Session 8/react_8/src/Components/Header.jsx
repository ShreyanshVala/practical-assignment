import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { state } = useContext(ThemeContext);

  return (
    <header
      style={{
        padding: "20px",
        background: state.theme === "light" ? "#f4f4f4" : "#333",
        color: state.theme === "light" ? "black" : "white",
      }}
    >
      <h2>Current Theme: {state.theme}</h2>
    </header>
  );
}

export default Header;
