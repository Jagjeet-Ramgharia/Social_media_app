import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Password do not match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="Login">
      <div className="login_wrapper">
        <div className="login_left">
          <h3 className="login_logo">Meet Up</h3>
          <span className="login_desc">
            Connect with friends and the World around you with Meet Up.
          </span>
        </div>
        <div className="login_right" >
          <form className="login_box" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              required
              ref={username}
              className="login_input"
              autoComplete="off"
              minLength="3"
            />
            <input
              type="email"
              placeholder="Email"
              required
              ref={email}
              className="login_input"
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Password"
              required
              ref={password}
              className="login_input"
              autoComplete="off"
              minLength="6"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              ref={confirmPassword}
              className="login_input"
            />
            <button type="submit" className="login_btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
