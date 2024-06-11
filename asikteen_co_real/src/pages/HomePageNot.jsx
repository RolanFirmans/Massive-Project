import React from "react";
import "../Css/Css.css";
import { Link } from "react-router-dom";
import sepatu from "../assets/img/sepatu.png";
import freeshiping from "../assets/img/freeshiping.png";
import payment from "../assets/img/payment.png";
import Money from "../assets/img/money.png";
import chat from "../assets/img/chat.png";
import dus from "../assets/img/dus.png";
import men from "../assets/img/men.png";
import women from "../assets/img/women.png";
import fb from "../assets/img/fb.png";  
import x from "../assets/img/x.png";
import ig from "../assets/img/ig.png";
import collection from "../assets/img/collection.png";
import newcollection from "../assets/img/newcollection.png";
import denim from "../assets/img/denim.png";
import NavbarComponent from "../component/NavbarComponent";
// import ProductCard from "../component/ProductCard";
import ProductGrid from "../data/ProductGrid";
import Carousel from 'react-bootstrap/Carousel';
import NavbarComponentNot from "../component/NavbarComponentNot";
import logo from "../assets/img/logo.png"

const HomePageNot = () => {
  return (
    <>
    <NavbarComponentNot />
    <div>
      <div className="ad-section">
        <div className="content">
          <h2>Asikeen.co</h2>
          <h1>
            Start Shopping <br />
            on the website
          </h1>
          <p>
            Discover the charm of preloved fashion with our handpicked selection
            of high-quality, gently-used clothing. Embrace sustainability without
            compromising on style. From vintage treasures to contemporary
            classics, our collection has something for everyone. Join our
            community of fashion lovers who are making a positive impact on the
            planet, one stylish outfit at a time.
          </p>
          <Link to="/LoginPage" className="shop-btn">Shop Now </Link>
        </div>
        <div className="image">
          <img src={sepatu} alt="Shoes" />
        </div>
      </div>
      <Features />
      <DeliverySection />
      <Categories />
      <Collection />
      <ProductGrid />
      <Footer/>
    </div>
    </>
  );
};

const Features = () => {
  return (
    <div className="features">
      <div className="feature1">
        <img src={freeshiping} alt="Free Shipping" />
        <p>3x Free Shipping</p>
      </div>
      <div className="feature2">
        <img src={payment} alt="Secure Payment" />
        <p>Secure Payment</p>
      </div>
      <div className="feature3">
        <img src={Money} alt="Money Back" />
        <p>100% Money Back</p>
      </div>
      <div className="feature4">
        <img src={chat} alt="Online Support" />
        <p>Online Support</p>
      </div>
    </div>
  );
};

const DeliverySection = () => {
  return (
    <section className="delivery-section">
      <div className="delivery-content">
        <h1>
          ASIKTEEN.CO <br />
          DELIVERS TO YOU
        </h1>
        <p>
          Enjoy the convenience of our delivery orders for a more practical shopping experience.
        </p>
        <Link to="/LoginPage" className="shop-now-btn">Shop Now</Link>
      </div>
      <div className="delivery-image">
        <img src={dus} alt="Boxes" />
      </div>
    </section>
  );
};

const Categories = () => {
  return (
    <div className="categories">
      <div className="category category1">
        <img src={men} alt="Men's Category" />
        <div className="category-content">
          <h2>Men's</h2>
          <a href="#" className="shop-now">Shop Now</a>
        </div>
      </div>
      <div className="category category2">
        <img src={women} alt="Women's Category" />
        <div className="category-content">
          <h2>Women's</h2>
          <a href="#" className="shop-now">Shop Now</a>
        </div>
      </div>
    </div>
  );
};

const Collection = () => {
  return (
    <Carousel className="collection-compo">
    <Carousel.Item interval={1000}>
    <div className="collection-images">
        <img src={collection} />
      </div>
    </Carousel.Item>
    <Carousel.Item interval={500}>
    <div className="collection-images">
        <img src={newcollection} />
      </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="collection-images">
        <img src={denim} />
      </div>
    </Carousel.Item>
  </Carousel>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
        <img src={logo} alt="Brand Logo" className="brand-logo-foot" />
          <p>A preloved website offers a platform for buying and selling secondhand items. Users can browse through a wide range of preloved goods, from clothing and accessories to electronics and furniture.</p>
          <div className="social-media">
            <img src={fb} alt="" />
            <img src={x} alt="" />
            <img src={ig} alt="" />
          </div>
          <div className="footer-right">
          <button className="get-started-button">Get started</button>
        </div>
        </div>
        
        <div className="footer-links">
          <div className="link-column">
            <h3>Home</h3>
            <ul>
              <li>Landing Page</li>
              <li>Recomendation</li>
              <li>Our Product</li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Category Product</h3>
            <ul>
              <li>Category Type</li>
              <li>Description Category</li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Cart</h3>
            <ul>
              <li>Cart Description</li>
              <li>Cart Success</li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Your Order</h3>
            <ul>
              <li>Payment Details</li>
              <li>Confirm Payment</li>
            </ul>
          </div>
        </div>
      
      </div>
      <div className="footer-bottom">
        <p>Preloved by Asikteen © 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};


export default HomePageNot;
export { Features };
export { DeliverySection };
export { Categories };
export { Collection };
