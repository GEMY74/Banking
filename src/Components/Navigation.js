import React, { useState } from "react";
import "./nav.css";
import PrimaryButton from "./PrimaryButton";
import logo from "../img/logo.svg";

function Navigation() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">Features</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Pricing</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <PrimaryButton name="Sign Up" className="btn" />
      </div>
      <div className="app__navbar-smallscreen">
        <i
          className="uil uil-bars"
          onClick={() => {
            setToggle(true);
          }}
        ></i>

        {toggle && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <i
              className="uil uil-multiply overlay__close"
              onClick={() => {
                setToggle(false);
              }}
            ></i>

            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">Features</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Pricing</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
