import React from "react";
import { Link } from "react-router-dom";
import "../../styles/global/navbar.css";
 // ✅ Corrected import path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* ✅ Use correct relative path for images */}
        <img src="src/images/logo.png" alt="App Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/learning">Learning Modules</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
