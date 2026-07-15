import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        backgroundColor: theme === "dark" ? "#222" : "#ddd",
        color: theme === "dark" ? "white" : "black",
        padding: "20px",
      }}
    >
      <h2>Instagram Navbar</h2>
    </nav>
  );
}

export default Navbar;
