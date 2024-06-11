import React from 'react';
import ProductCard from '../component/ProductCard';
import "../Css/Css.css";
import ThriftHoodie from '../assets/img/WomenC/ThriftHoodie.png';
import ThrifLongShirt from '../assets/img/WomenC/ThrifLongShirt.png';
import ThriftTShirt from '../assets/img/WomenC/ThriftTShirt.png';
import ThriftSweaterVintage from '../assets/img/WomenC/ThriftSweaterVintage.png';
import ThriftSkenaTShirt from '../assets/img/WomenC/ThriftSkenaTShirt.png';
import UniqloXKaws from '../assets/img/WomenC/UniqloXKaws.png';

const products = [
  {
    id: 1,
    image: ThriftHoodie,
    title: 'Thrift Hoodie',
    price: '70000',
    oldPrice: '79.000',
    category: 'Clothes',
    size: 'L',
    materials: 'Cotton Fleece',
    careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
  },
  {
    id: 2,
    image: ThriftTShirt,
    title: 'Thrift Shirt',
    price: '70.000',
    oldPrice: '150.000',
    category: 'Clothes'
  },
  {
    id: 3,
    image: ThrifLongShirt,
    title: 'Long Sleeve',
    price: '100.000',
    oldPrice: '300.000',
    category: 'Clothes'
  },
  {
    id: 4,
    image: ThriftSweaterVintage,
    title: 'Thrift Sweater Vintage',
    price: '70.000',
    oldPrice: '150.000',
    category: 'Clothes'
  },
  {
    id: 5,
    image: ThriftSkenaTShirt,
    title: 'Skena Shirt',
    price: '70.000',
    oldPrice: '250.000',
    category: 'Clothes'
  },
  {
    id: 6,
    image: UniqloXKaws,
    title: 'Uniqlo x Kaws',
    price: '100.000',
    oldPrice: '350.000',
    category: 'Clothes'
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
             product={product}
           />
          ))}
        </div>
      </div>
    );
  };

  export default ProductGrid;
  