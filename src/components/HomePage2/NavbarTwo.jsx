import React from "react";
import "../../assets/css/navbar.css";
import logo from "../../assets/images/logo/ino360-logo-new.png";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarTwo() {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          <img className="logo-stl" src={logo} alt="Logo" />
        </a>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li className="btn-stl-2 left-btn">
            <button onClick={() => navigate("/login")}>History</button>
          </li>
          <li className="btn-stl-2 right-btn">
            <button onClick={() => navigate("/register")}>Contact Us</button>
          </li>
        </ul>
      </header>
    </>
  );
}
