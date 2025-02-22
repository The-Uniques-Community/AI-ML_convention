import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Code <span>__</span>Consult</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/case-studies">Case Studies</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><button className="btn">Buy Template</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
