import React from 'react';
import { Link } from 'react-router-dom';
import "../Css/Css.css";

const ProductCard = ({ product }) => {
    const { id, image, title, price, oldPrice } = product;

    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h3>{title}</h3>
            <p className="price">Rp. {price}</p>
            {oldPrice && <p className="old-price">Rp. {oldPrice}</p>}
            <Link to={`/detail/${id}`} state={{ product }} className="view-button">VIEW PRODUCTS</Link>
        </div>
    );
};

export default ProductCard;
