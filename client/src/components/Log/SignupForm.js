import React, { useState } from "react";
import { createUser } from "../../utils/dbAPI/user";
const SignupForm = () => {
  const [formState, setFormState] = useState({
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`/user/signup`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then(async (res) => {
        if (res.ok) {
          console.log(`Signup Successful.`);
        } else {
          console.log(`Signup failed...`);
        }
        return res;
      })
      .catch((err) => console.error(err));
    console.log(response);

    setFormState({
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} id="modalSignup" className="loginForm">
        <label htmlFor="lastName">Last Name</label>
        <input
          value={formState.lastName}
          onChange={handleChange}
          name="lastName"
          id="lastName"
          type="name"
        ></input>
        <label htmlFor="email">E-Mail</label>
        <input
          value={formState.email}
          onChange={handleChange}
          name="email"
          id="email"
          type="email"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={formState.password}
          onChange={handleChange}
          name="password"
          id="password"
          type="password"
        ></input>
        <button type="submit" className="submitBtn">
          Proceed
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
