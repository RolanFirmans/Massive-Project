import React, { useState } from "react";
import "./Login.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const storedUser = localStorage.getItem(email);
        console.log("Stored user data:", storedUser);

        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            if (parsedUser.password === password) {
                console.log("Login successful");
                navigate("/"); 
            } else {
                console.error("Incorrect password");
            }
        } else {
            console.error("User not found");
        }
    };

    return (
        <div className="cont-log">
            <div className="login-container">
                <h2 className="h2-login">Login</h2>
                <form onSubmit={handleSubmit} className="form-login">
                    <input
                        type="text" // Changed to email type for better validation
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <NavLink to="/" className="login-btn">Login</NavLink>
                </form>
                <h4 className="h4-login">NOT REGISTERED?</h4>
                <p className="p-login"><Link to="/SigninPage">Register Now</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;
