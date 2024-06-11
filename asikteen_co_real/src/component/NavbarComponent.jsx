import {Navbar, Container, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"
const NavbarComponent = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <a href="#">
            <img src={logo} alt="Brand Logo" className="brand-logo" />
          </a>
          <ul className="nav-list">
            <li><a href="/AdminDashBoardPage">Admin Panel</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/WomenPage">Women</a></li>
            <li><a href="/MenPage">Men</a></li>
            <li><a href="/CartPage">Cart</a></li>
            <li><a href="/YourOrder">Your Order</a></li>
          </ul>
          <Link to="/LoginPage" className="btn-login">Logout</Link>
        </div>
      </nav>
    </header>
  );
}


export default NavbarComponent
