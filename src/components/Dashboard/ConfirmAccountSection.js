import axios from "axios";
import React, { useState } from "react";
import { Button } from "../Button";
import "./SettingsSection.css";

function SettingsSection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  let handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    // for testing purposes
    console.log(user);

    axios
      .get(`http://localhost:5000/users/authenticate/${username}`)
      .then((res) => {
        res.data.password === user.password
          ? (window.location = "/settings")
          : alert(`Incorrect Username or Password`);
      })
      .catch((err) => {
        alert(`User doesn't exist!`);
        // console.log("User doesn't exist");
        console.log("Error: " + err);
      });

    // set fields to empty after submit
    // link to settingsSection on dashboard after success
  };

  return (
    <>
      <div className="main__section">
        <form autoComplete="off" className="form" onSubmit={handleSubmit}>
          <h1 class="form__title">Change Account Details</h1>
          <div className="form__inputs">
            <div class="form__subtitle">
              <label htmlFor="username" className="form__label">
                Username
              </label>
            </div>
            <input
              required
              minLength="3"
              id="username"
              type="text"
              name="username"
              className="form__input"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form__inputs">
            <div class="form__subtitle">
              <label htmlFor="password" className="form__label">
                Password
              </label>
            </div>
            <input
              required
              minLength="8"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
              title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
              id="password"
              type="password"
              name="password"
              className="form__input"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form__btn">
            <Button buttonSize="btn--wide" buttonColor="blue" type="submit">
              Continue
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SettingsSection;
