import React from "react";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import "./LoginRegister.css";
import { useState } from "react";

const LoginRegister = () => {
  const [register, setRegister] = useState(false);

  const handleLogin = () => {
    setRegister(false);
  };
  const handleRegister = () => {
    setRegister(true);
  };

  return (
    <div className="form-container">
      <div className="btn-box">
        <div className="btn-style"></div>

        <button
          className={register ? "toggle-btn" : "toggle-btn clicked"}
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className={register ? "toggle-btn clicked" : "toggle-btn"}
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
      <div>{register ? <Register /> : <Login />}</div>
    </div>
  );
};

export default LoginRegister;
