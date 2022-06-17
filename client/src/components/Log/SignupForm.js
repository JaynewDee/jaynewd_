import React, { useState } from "react";
import { createUser } from "../../utils/dbAPI/user";
const SignupForm = () => {
  const [user, setUser] = useState()
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
  console.log(user)
  const handleFormSubmit = async (event) => {
    event.preventDefault();

        const userData = await createUser(formState)
        setUser(userData)

    setFormState({
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleFormSubmit(e)} id="modalSignup" className="loginForm">
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
