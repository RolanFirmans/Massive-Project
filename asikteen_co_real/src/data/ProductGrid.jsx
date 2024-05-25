import React from 'react';
import ProductCard from '../component/ProductCard';
import "../Css/Css.css";
import baju from "../assets/img/baju.png"

const products = [
    {
      id: 1,
      image: baju,
      title: 'Thrift Jaket Vintage',
      price: '70.000',
      oldPrice: '79.000'
    },
    {
      id: 2,
      image: baju,
      title: 'Thrift Jaket Vintage',
      price: '70.000',
      oldPrice: '79.000'
    },
    {
      id: 3,
      image: baju,
      title: 'Nike Dunk (Size 43)',
      price: '700.000',
      oldPrice: '900.000'
    },
    {
      id: 4,
      image: baju,
      title: 'Thrift Jaket Vintage',
      price: '70.000',
      oldPrice: '79.000'
    },
    {
      id: 5,
      image: baju,
      title: 'Air Jordan 13 (Size 42)',
      price: '850.000',
      oldPrice: '950.000'
    },
    {
      id: 6,
      image: baju,
      title: 'Adidas Track Pants(Size M)',
      price: '50.000',
      oldPrice: '70.000'
    }
  ];


  const ProductGrid = () => {
    return (
      <div className="product-grid-container">
        <h1>OUR PRODUCT</h1>
        <h2>The Best Deals This Week</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
            />
          ))}
        </div>
      </div>
    );
  };

  export default ProductGrid;
  