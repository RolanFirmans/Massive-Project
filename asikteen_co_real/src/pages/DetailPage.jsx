import React from "react";
import "../Css/Css.css";
import NavbarComponent from "../component/NavbarComponent";
import { productsd } from "../data/ProductDisplay";
import ProductCardDisplay from "../component/ProductCardDisplay";

const DetailPage = () => {
    return (
        <>
            <NavbarComponent />
            <h4 className="h4-Detail">Detail Page</h4>
            <div className="product-grid-detail">
                {productsd.map(product => (
                    <ProductCardDisplay
                        key={product.id}
                        image={product.image}
                        title={product.title}
                    />
                ))}
            </div>
        </>
    );
};

export default DetailPage;