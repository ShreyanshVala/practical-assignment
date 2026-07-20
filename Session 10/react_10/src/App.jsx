import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />

      <div className="forms">
        <SignUp />
        <Login />
      </div>
    </div>
  );
}

export default App;
