import React from "react";
import "./Signin.css";

const SigninPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="cont-reg">
                <div className="register-container">
                <h2 className="h2-register">Register</h2>
                    <form onSubmit={handleSubmit} className="form-register">
                        <h3>Personal Information</h3>
                        <input type="text" name="name" placeholder="First Name" required />
                        <input type="text" name="phone" placeholder="Phone Number" required />
                        <input type="text" name="address" placeholder="Address" required />
                        <h3>Log In Information</h3>
                        <input type="text" name="username" placeholder="Username" required />
                        <input type="password" name="pass" placeholder="Password" required />
                        <input type="submit" name="register" value="Register" />
                    </form>
                    <p className="p-register"><a href="/LoginPage">Cancle</a></p>
                </div>
        </div>
    );
};

export default SigninPage;