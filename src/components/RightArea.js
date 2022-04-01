import React from "react";
import Form from "./Form";
import "./scss/RightArea.scss";

function RightArea() {
  return (
    <div className="right-area">
      <h1>Sign up</h1>
      <Form />
      <label htmlFor="">
        <input type="checkbox" className="accept-checkbox" />
        By signing up, I accept HSCPay{" "}
        <a href="#right-area">User Terms and Conditios</a>
      </label>
      <div className="form-action-container">
        <button className="sign-up-button">Sign Up</button>
        <a href="." className="forgot-password-text">Forgot Your Password?</a>
      </div>
    </div>
  );
}

export default RightArea;
