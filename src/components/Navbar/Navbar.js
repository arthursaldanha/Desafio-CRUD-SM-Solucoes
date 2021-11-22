import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";

// Styles
import "./Navbar.css";

// Content
import { routes } from "./content";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClickedMenu = () => {
    setMenuVisible(!menuVisible);
  };

  window.addEventListener('resize', function () {
    if (window.innerWidth > 600) setMenuVisible(false);
  });

  return (
    <div className="navbar">
      <div className="container-navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClickedMenu}>
          {menuVisible ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`navbar-menu ${menuVisible ? "active" : ""}`}>
          <ul>
            {routes.map(({ id, text, path }) => {
              return (
                <li key={id}>
                  <Link to={path}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
