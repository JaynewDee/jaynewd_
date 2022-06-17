import React, { useState } from "react";
import { createUser } from "../../utils/dbAPI/user";
const SignupForm = () => {
  const [user, setUser] = useState({})
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

    async function createNewUser() {
        return await createUser(formState)
    }
    createNewUser()
    
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
