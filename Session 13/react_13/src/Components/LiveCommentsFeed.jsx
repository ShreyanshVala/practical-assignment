import { useEffect, useState } from "react";

import { db } from "../firebase";

import { collection, onSnapshot } from "firebase/firestore";

function LiveCommentsFeed() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const commentsRef = collection(db, "comments");

    // Real Time Listener

    const unsubscribe = onSnapshot(commentsRef, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setComments(list);
    });

    // Cleanup

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Live Comments</h2>

      {comments.map((item) => (
        <div key={item.id}>{item.comment}</div>
      ))}
    </div>
  );
}

export default LiveCommentsFeed;
