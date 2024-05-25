import React from "react";
import "./Signin.css";

const SigninPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div>
                <h2>Register</h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <h3>Personal Information</h3>
                        <input type="text" name="name" placeholder="First Name" required />
                        <input type="text" name="phone" placeholder="Phone Number" required />
                        <input type="text" name="address" placeholder="Address" required />
                        <h3>Login Information</h3>
                        <input type="text" name="username" placeholder="Username" required />
                        <input type="password" name="pass" placeholder="Password" required />
                        <input type="submit" name="register" value="Register" />
                        <p><a href="/LoginPage">Cancle</a></p>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default SigninPage;