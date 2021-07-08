import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="Login">
        <div className="login_wrapper">
            <div className="login_left">
                <h3 className="login_logo">Meet Up</h3>
                <span className="login_desc">Connect with friends and the World around you with Meet Up.</span>
            </div>
            <div className="login_right">
                <div className="login_box">
                    <input type="text" placeholder="Email" className="login_input" autoComplete="off"/>
                    <input type="password" placeholder="Password" className="login_input"/>
                    <button className="login_btn">Sign In</button>
                    <span className="forgot_password">Forgot Password?</span>
                    <button className="loginSignUp_btn">Sign Up</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login
