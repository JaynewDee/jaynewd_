import React, { useState } from 'react'
import { userAPI } from '../../utils/dbAPI/user';
const SignupForm = ({setLoggedIn}) => {
    const [formState, setFormState] = useState({
      lastName: "",
      email: "",
      password: "",
    });
    console.log(formState);
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        let response = await userAPI.createUser(formState);
        response.ok ? setLoggedIn(true) : setLoggedIn(false);
      } catch (e) {
        console.error(e);
      }
      // clear form values
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

export default SignupForm