import React, { useState } from "react";
import { loginUser } from "../../utils/dbAPI/user";
import { useUserContext } from "../../context/UserContext";
import Error from "./Error";

const LoginForm = ({ setVisibility }) => {
  const { signin } = useUserContext();
  const [error, setErrorState] = useState({ show: false, error: <Error /> });
  const [formState, setFormState] = useState({
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

    const data = await loginUser(formState);
    if (data) {
      signin(data);
      setVisibility("hidden")
    }
    else {
      setErrorState({
        show: true,
        error: (
          <Error
            setError={setErrorState}
            duration={3000}
            text="Login failed! Confirm credentials and try again."
          />
        ),
      });
    }
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      {error.show ? (
        error.error
      ) : (
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
      )}
    </div>
  );
};

export default LoginForm;
