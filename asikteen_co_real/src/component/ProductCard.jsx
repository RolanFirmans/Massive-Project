import React from 'react';
import "../Css/Css.css";


const ProductCard = ({ image, title, price, oldPrice }) => {
    return (
      <div className="product-card">
        <img src={image} alt={title} className="product-image" />
        <h3>{title}</h3>
        <p className="price">Rp. {price}</p>
        {oldPrice && <p className="old-price">Rp. {oldPrice}</p>}
        <button className="view-button">VIEW PRODUCTS</button>
      </div>
    );
  };
  export default ProductCard