import React, { useState } from 'react';
import "../Css/Css.css";
import ProductCard from '../component/ProductCard';
import { products } from '../data/ProductWomenC';
import NavbarComponent from '../component/NavbarComponent';
import Clothes from '../assets/img/Clothes.png';
import Shoes from '../assets/img/Shoes.png';
import Pants from '../assets/img/Pants.png';

const categories = [
  { name: 'Clothes', image: Clothes },
  { name: 'Shoes', image: Shoes },
  { name: 'Pants', image: Pants },
];

const WomenPage = () => {
    const [activeCategory, setActiveCategory] = useState('Clothes');
  
    const handleCategoryClick = (categoryName) => {
      setActiveCategory(categoryName);
    };
  
    const filteredProducts = products.filter(product => product.category === activeCategory);
  
    return (
      <>
        <NavbarComponent />
        <div className="product-women-container">
          <div className="category-header">
            <h1>CATEGORIES</h1></div>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className={`category-button ${activeCategory === category.name ? 'active' : ''}`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                {category.name}
              </button>
            ))}
          </div>
          <div className="product-grid">
            {filteredProducts.map(product => (
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
      </>
    );
  };
export default WomenPage;
