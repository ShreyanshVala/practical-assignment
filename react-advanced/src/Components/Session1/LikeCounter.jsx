import { useState } from "react";

function LikeCounter() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid #ddd",
        padding: "20px",
        width: "250px",
        margin: "20px auto",
        borderRadius: "10px",
      }}
    >
      <h2>❤️ Instagram Like Counter</h2>

      <h3>{likes} Likes</h3>

      <button
        onClick={handleLike}
        style={{
          padding: "10px 20px",
          backgroundColor: "#e1306c",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Like ❤️
      </button>
    </div>
  );
}

export default LikeCounter;
