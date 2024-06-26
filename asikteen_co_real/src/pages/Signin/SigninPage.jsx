import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
    const [namalengkap, setName] = useState("");
    const [notelp, setPhone] = useState("");
    const [alamat, setAddress] = useState("");
    const [email, setEmail] = useState(""); // Added email state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernamebank, setBankName] = useState("");
    const [namabank, setAccountName] = useState("");
    const [nomorrekening, setAccountNumber] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            namalengkap,
            notelp,
            alamat,
            email, // Included email in newUser
            username,
            password,
            usernamebank,
            namabank,
            nomorrekening,
        };

        // Save the user data to localStorage
        localStorage.setItem(email, JSON.stringify(newUser));
        console.log("Registration successful");
        navigate("/LoginPage");
    };

    return (
        <div className="cont-reg">
            <div className="register-container">
                <h2 className="h2-register">Register</h2>
                <form onSubmit={handleSubmit} className="form-register">
                    <h3>Personal Information</h3>
                    <input
                        type="text"
                        name="namalengkap"
                        placeholder="Full Name"
                        value={namalengkap}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="notelp"
                        placeholder="Phone Number"
                        value={notelp}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="alamat"
                        placeholder="Address"
                        value={alamat}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <h3>Login Information</h3>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                    <h3>Bank Settings</h3>
                    <input
                        type="text"
                        name="usernamebank"
                        placeholder="Bank Name"
                        value={usernamebank}
                        onChange={(e) => setBankName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="namabank"
                        placeholder="Your Account Name"
                        value={namabank}
                        onChange={(e) => setAccountName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="nomorrekening"
                        placeholder="Account Number"
                        value={nomorrekening}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                    />
                    <input type="submit" className="submit-register" name="register" value="Register" />
                </form>
                <p className="p-register"><a href="/LoginPage">Cancel</a></p>
            </div>
        </div>
    );
};

export default SigninPage;
