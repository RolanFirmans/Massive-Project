import React from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../component/NavbarComponent";

const YourOrderPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
        <NavbarComponent />
        <h4 className="h4-yourorder">Your Order Page</h4>
        </>
    );
};

export default YourOrderPage;