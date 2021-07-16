import React, { useContext, useRef } from "react";
import "./loginn.css" 
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, error, isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className="Login">
      <div className="login_wrapper">
        <div className="login_left">
          <h3 className="login_logo">Meet Up</h3>
          <span className="login_desc">
            Connect with friends and the World around you with Meet Up.
          </span>
        </div>
        <form className="login_right" onSubmit={handleSubmit}>
          <div className="login_box">
            <input
              type="email"
              placeholder="Email"
              className="login_input"
              required
              autoComplete="off"
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="login_input"
              // minLength="6"
              ref={password}
            />
            <button type="submit" className="login_btn">
              {isFetching ? <CircularProgress color="white" size="20px"/> : "Sign In"}
            </button>
            <span className="forgot_password">Forgot Password?</span>
            <Link to='/register' className="loginSignUp_btn">
            {isFetching ? <CircularProgress color="white" size="20px"/> : "Sign Up"}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
