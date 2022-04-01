import React, { useState } from "react";
import "./scss/Form.scss";

function Form() {
  const [name, setName] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`The name you entered was ${name}`);
  }
  return (
    <div className="input-area">
      <input type="text" placeholder="Full Name" className="input-element" />
      <br />
      <input type="email" placeholder="E-mail" className="input-element" />
      <br />
      <i className="eye-icon">
        <input
          type="password"
          placeholder="Password"
          className="input-element"
        />
      </i>
    </div>
  );
}

export default Form;
