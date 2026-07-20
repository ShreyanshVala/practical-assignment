import { signOut } from "firebase/auth";
import { auth } from "../Components/firebase";

function Navbar({ user }) {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#ddd",
      }}
    >
      <h2>
        {user ? `Welcome, ${user.displayName || user.email}` : "Welcome, Guest"}
      </h2>

      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button>Sign In</button>
      )}
    </nav>
  );
}

export default Navbar;
