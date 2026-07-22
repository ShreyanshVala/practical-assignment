import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setEmail("");
    setPassword("");
    setIsLoggedIn(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {!isLoggedIn ? (
          <>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>

                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit">Login</button>
            </form>
          </>
        ) : (
          <>
            <h2>Welcome 🎉</h2>

            <p>Login Successful</p>

            <h3>{email}</h3>

            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
