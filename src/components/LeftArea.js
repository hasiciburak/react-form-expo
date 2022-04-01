import React from "react";
import "./scss/LeftArea.scss";
import leftImage from "../assets/img/DrawKit-Vector-Illustration-ecommerce-11.svg";
function LeftArea() {
  return (
    <div className="left-area">
      <p className="logo">
        <span className="logo-left-side">HSC</span>
        <span className="logo-right-side">Pay</span>
      </p>
      <h1 className="welcome-header">WELCOME!</h1>
      <p>Your Payment: More Secure, More Convenient</p>
      <img src={leftImage} alt="" className="left-area-image"/>
    </div>
  );
}

export default LeftArea;
