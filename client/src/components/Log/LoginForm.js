import React from "react";

const LoginForm = () => {

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <form id="modalLogin" className="loginForm">
        <label for="lastName">Last Name</label>
        <input id="lastName" type="text"></input>
        <label for="email">E-Mail</label>
        <input id="email" type="text"></input>
        <label for="password">Password</label>
        <input id="password" type="text"></input>
        <button onClick={(e) => handleLoginSubmit(e)} className="submitBtn">Proceed</button>
      </form>
    </div>
  );
};

export default LoginForm;
