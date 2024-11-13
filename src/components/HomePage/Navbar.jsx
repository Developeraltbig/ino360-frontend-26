import React from "react";
import "../../assets/css/navbar.css";
import logo1 from "../../assets/images/logo/ino360-logo-new.png";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img className="logo-stl" src={logo1} alt="Logo" />
        </a>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/innoCheck">InnoCheck</Link>
          </li>
          <li>
            <Link to="/innoCheckNext">InnoCheck2</Link>
          </li>
          <li>
            <Link to="/provisioDraft">ProvisioDraft</Link>
          </li>
          <li>
            <Link to="/">DraftMaster</Link>
          </li>
          <li>
            <Link to="/">IDS Pro</Link>
          </li>
          <li>
            <Link to="/">QuickForms</Link>
          </li>

          <li className="btn-stl-2 left-btn">
            <button onClick={() => navigate("/homeTwo")}>Login</button>
          </li>
          <li className="btn-stl-2 right-btn">
            <button onClick={() => navigate("/register")}>Contact Us</button>
          </li>
        </ul>
      </header>
    </>
  );
}
