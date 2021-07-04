import React from 'react';
import { Button } from '../Button';
import './registerFormSection.css';

function registerFormSection() {
  return (
    <>
      <div className="section">
      <form className="form">
        <h1>Register</h1>
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
          <label htmlFor="email" className="form__label">
            Password
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form__input"
            placeholder="Enter your password"
          />
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

export default registerFormSection;
