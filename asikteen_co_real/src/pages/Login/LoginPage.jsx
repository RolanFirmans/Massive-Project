import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Login successful:", data);
            navigate("/"); // Redirect to home or another page
        } else {
            console.error("Login failed");
        }
    };

    return (
        <div className="cont-log">
            <div className="login-container">
                <h2 className="h2-login">Login</h2>
                <form onSubmit={handleSubmit} className="form-login">
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="pass"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input type="submit" class="submit-login" name="login" value="Login" />
                </form>
                <h4 className="h4-login">NOT REGISTERED?</h4>
                <p className="p-login"><a href="/SigninPage">Register Now</a></p>
            </div>
        </div>
    );
};

export default LoginPage;
