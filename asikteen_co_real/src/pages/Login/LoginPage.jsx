import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="cont-log">
            <div className="login-container">
            <h2 className="h2-login">Login</h2>
                    <form onSubmit={handleSubmit} className="form-login">
                        <input type="text" name="email" placeholder="Email" required />
                        <input type="password" name="pass" placeholder="Password" required />
                        <input type="submit" name="login" value="Login" />
                    </form>
                <h4 className="h4-login">NOT REGISTERED?</h4>
                <p className="p-login"><a href="/SigninPage">Register Now</a></p>
            </div>
              
        </div>
    );
};

export default LoginPage;