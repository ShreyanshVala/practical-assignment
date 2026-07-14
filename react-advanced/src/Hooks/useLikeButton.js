import { useState } from "react";

function useLikeButton(initialLikes = 0) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const toggleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  };

  return {
    liked,
    likes,
    toggleLike,
  };
}

export default useLikeButton;
