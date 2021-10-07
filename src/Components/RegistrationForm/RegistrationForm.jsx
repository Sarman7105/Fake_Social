import axios from "axios";
import React, { useState } from "react";
const url = "http://localhost:8000/api/v1/user/register";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios
      .post(url, {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const handleOnBlur = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    if (name === "name") {
      setName(value);
    }

    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }

    if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" type="text" onBlur={handleOnBlur} />
        </div>

        <div>
          <label htmlFor="name">Email:</label>
          <input id="email" name="email" type="text" onBlur={handleOnBlur} />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            onBlur={handleOnBlur}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onBlur={handleOnBlur}
          />
        </div>

        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
