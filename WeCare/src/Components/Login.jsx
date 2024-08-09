import React, { useState } from "react";
import { Logo } from "./index.js";
import "../css/Login.css";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login({ storeLogin, auth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
     try {
       const user = await auth(email, password);
       if(user){
        dispatch(storeLogin({user}))
        navigate("/")
       }else{
        setError("Email or Password is not correct")
       }
     } catch (error) {
      setError(error)
     }
  };

 
  return (
    <div className="login-form-container">
      <div className="logo-container">
        <Logo />
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        {error ? <p style={{ color: "red" }}>{error}</p> : null}
      </form>
    </div>
  );
}

export default Login;
