import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.scss";

const DUMMY_USER = {
  username: "user123",
  password: "pass123"
};

const Login = () => {
  const [username, setUsername] = useState(DUMMY_USER.username);
  const [password, setPassword] = useState(DUMMY_USER.password);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
  {error && <div className="login-error">{error}</div>}
  <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
