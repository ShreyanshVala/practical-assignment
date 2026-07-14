import React from "react";
import useLikeButton from "../../Hooks/useLikeButton";

function PostCard() {
  const { liked, likes, toggleLike } = useLikeButton(120);

  return (
    <div
      style={{
        width: "300px",
        border: "1px solid gray",
        padding: "15px",
        margin: "20px auto",
        borderRadius: "10px",
      }}
    >
      <img src="https://picsum.photos/300/200" alt="Post" width="100%" />

      <h3>Nature Photo</h3>

      <button onClick={toggleLike}>{liked ? "❤️ Liked" : "🤍 Like"}</button>

      <p>{likes} Likes</p>
    </div>
  );
}

export default PostCard;
