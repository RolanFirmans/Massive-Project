// src/pages/ProductListPage.js
import React from 'react';
import ProductCard from '../component/ProductCard';
import { productsd } from '../data/ProductDisplay';
import "../Css/Css.css";

const ProductListPage = () => {
    return (
        <div className="product-list-page">
            {productsd.map(product => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    oldPrice={product.oldPrice}
                />
            ))}
        </div>
    );
};

export default ProductListPage;
