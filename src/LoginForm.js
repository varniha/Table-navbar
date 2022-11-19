import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2 className="hero1">Login</h2>
      <h3 className="hero2">Hello, Teachers!</h3>
      <p className="hero3">Enter your personal details below.</p>
      <form onSubmit={submitForm}>
        <div className="inputbox">
          <div className="userinput">
            <label for={"name"}>Username:</label>
            <input
              required
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="userinput">
            <label for={"id"}>Password:</label>
            <input
              required
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="forget">
            <a href="/">Forget password / Username</a>
          </div>
        </div>
        <input type="submit" value="Submit" className="submit-btn"></input>
        <div className="register">
          <a href="/">Not registered? Create Account</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
