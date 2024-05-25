import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div>
                <h2 className="h2-login">Login</h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="email" placeholder="Email" required />
                        <input type="password" name="pass" placeholder="Password" required />
                        <input type="submit" name="login" value="Masuk" />
                    </form>
                </div>
                <h4>Belum terdaftar?</h4>
                <p><a href="/SigninPage">Daftar Sekarang</a></p>
            </div>
        </div>
    );
};

export default LoginPage;