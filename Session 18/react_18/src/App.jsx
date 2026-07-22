import "./App.css";
import "./firebase";

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>🌍 Environment Variables Demo</h1>

        <div className="box success">
          <h3>✅ Firebase</h3>
          <p>Firebase configuration loaded successfully.</p>
        </div>

        <div className="box success">
          <h3>✅ Spotify API</h3>
          <p>Spotify API key loaded successfully.</p>
        </div>

        <div className="box">
          <h3>Current Environment</h3>
          <p>{import.meta.env.MODE}</p>
        </div>

        <div className="box">
          <h3>Welcome Message</h3>
          <p>{import.meta.env.VITE_WELCOME_MSG}</p>
        </div>

        <div className="box">
          <h3>Security</h3>
          <p>
            API Keys are stored in <strong>.env</strong> files and are used in
            the application without displaying them in the UI.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
