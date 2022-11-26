import React from "react";
import logo from "../Assets/logo.png";

function Header() {
  return (
    <div className="headerContainer">
      <div className="menuDiv">
        <ul className="nav">
          <li>RANGE</li>
          <li>SUBSCRIPTIONS</li>
          <a href="#homePage"><img src={logo} alt="logo" className="logo" id="home" /></a>
          <li >SUPPORT</li>
          <li>ACCOUNT</li>
        </ul>
      </div>
      <button className="orderButton">ORDER</button>
    </div>
  );
}

export default Header;
