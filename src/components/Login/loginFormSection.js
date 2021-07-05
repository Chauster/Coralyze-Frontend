import React from 'react';
import { Button } from '../Button';
import './loginFormSection.css';

function loginFormSection() {
  return (
    <>
      <div className="section">
        <form autoComplete="off" className="form">
          <h1>Login</h1>
          <div className="form__inputs">
            <label htmlFor="name" className="form__label">
              Username
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="form__input"
              placeholder="Enter your username/email"
            />
          </div>
          <div className="form__inputs">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form__input"
              placeholder="Enter your password"
            />
            {/* <i id="togglePassword" className="fa fa-eye"></i> */}
          </div>
          <div className="form__btn">
            <Button buttonSize="btn--wide" buttonColor="blue" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default loginFormSection;
