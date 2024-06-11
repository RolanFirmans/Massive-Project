import {Navbar, Container, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"
const NavbarComponentNot = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <a href="#">
            <img src={logo} alt="Brand Logo" className="brand-logo" />
          </a>
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="/LoginPage">Women</a></li>
            <li><a href="/LoginPage">Men</a></li>
            <li><a href="/LoginPage">Cart</a></li>
            <li><a href="/LoginPage">Your Order</a></li>
          </ul>
          <Link to="/LoginPage" className="btn-login">Login</Link>
        </div>
      </nav>
    </header>
  );
}


export default NavbarComponentNot
