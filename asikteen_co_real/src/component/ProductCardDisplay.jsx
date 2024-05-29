// src/component/ProductCardDisplay.js
import React from 'react';
import "../Css/Css.css";

const ProductCardDisplay = ({ image, title }) => {
    return (
        <div className="product-card-display">
            <img src={image} alt="Product" className="product-image-display" />
            <h4>{title}</h4>
        </div>
    );
};

export default ProductCardDisplay;
