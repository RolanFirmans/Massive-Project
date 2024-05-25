import React from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../component/NavbarComponent";

const CartPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
        <NavbarComponent />
        <h4 className="h4-cart">Cart Page</h4>
        </>
    );
};

export default CartPage;