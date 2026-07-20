import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    alert("Logout Successful");
  };

  return (
    <div className="header">
      <h2>Firebase Authentication</h2>

      {user ? (
        <>
          <p>Logged In: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>No User Logged In</p>
      )}
    </div>
  );
}

export default Header;
