import {Navbar, Container, Nav} from "react-bootstrap";
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
            <li><a href="">Home</a></li>
            <li><a href="">Women</a></li>
            <li><a href="">Men</a></li>
            <li><a href="">Cart</a></li>
            <li><a href="">Your Order</a></li>
          </ul>
          <a href="" className="btn-login">Login</a>
        </div>
      </nav>
    </header>
  );
}


export default NavbarComponent
