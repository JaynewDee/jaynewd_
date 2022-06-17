import React, { useState } from "react";
import { loginUser } from "../../utils/dbAPI/user";
import { useUserContext } from "../../context/UserContext";
const LoginForm = () => {
  const user = useUserContext();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [userState, setUser] = useState({});
  console.log(userState);
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

    async function login() {
      return await loginUser(formState).then((data) => setUser(data));
    }
    login();

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} id="modalLogin" className="loginForm">
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

export default LoginForm;
