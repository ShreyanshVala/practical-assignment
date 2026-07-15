import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function PostCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
        color: theme === "dark" ? "white" : "black",
        padding: "30px",
        margin: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Instagram Post</h2>

      <img src="https://picsum.photos/300/200" alt="post" />

      <p>This is a sample Instagram post.</p>
    </div>
  );
}

export default PostCard;
