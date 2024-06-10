import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SigninPage = () => {
    const [namalengkap, setName] = useState("");
    const [notelp, setPhone] = useState("");
    const [alamat, setAddress] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernamebank, setBankName] = useState("");
    const [namabank, setAccountName] = useState("");
    const [nomorrekening, setAccountNumber] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Debug: Check the form values
        console.log("Form values:", {
            namalengkap,
            notelp,
            alamat,
            username,
            password,
            usernamebank,
            namabank,
            nomorrekening,
        });

        try {
            const response = await axios.post("http://localhost:8000/login", {
                namalengkap,
                notelp,
                alamat,
                username,
                password,
                usernamebank,
                namabank,
                nomorrekening,
            });

            if (response.status === 200) {
                console.log("Registration successful:", response.data);
                navigate("/LoginPage"); 
            } else {
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="cont-reg">
            <div className="register-container">
                <h2 className="h2-register">Register</h2>
                <form onSubmit={handleSubmit} className="form-register">
                    <h3>Informasi Pribadi</h3>
                    <input
                        type="text"
                        name="namalengkap"
                        placeholder="Nama Lengkap"
                        value={namalengkap}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="notelp"
                        placeholder="Nomor Telepon"
                        value={notelp}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="alamat"
                        placeholder="Alamat"
                        value={alamat}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <h3>Informasi Login</h3>
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
                    <h3>BANK</h3>
                    <input
                        type="text"
                        name="usernamebank"
                        placeholder="Nama Bank"
                        value={usernamebank}
                        onChange={(e) => setBankName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="namabank"
                        placeholder="Nama Akun Bank"
                        value={namabank}
                        onChange={(e) => setAccountName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="nomorrekening"
                        placeholder="Nomor Rekening"
                        value={nomorrekening}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                    />
                    <input type="submit" name="register" value="Register" />
                </form>
                <p className="p-register"><a href="/LoginPage">Cancel</a></p>
            </div>
        </div>
    );
};

export default SigninPage;
