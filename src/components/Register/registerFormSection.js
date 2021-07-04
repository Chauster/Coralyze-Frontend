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
          <label htmlFor="fname" className="form__label">
            First Name
          </label>
          <input
            id="fname"
            type="text"
            name="fname"
            className="form__input"
            placeholder="Enter your first name"
          />
        </div>
        <div className="form__inputs">
          <label htmlFor="faname" className="form__label">
            Family Name
          </label>
          <input
            id="faname"
            type="text"
            name="faname"
            className="form__input"
            placeholder="Enter your family name"
          />
        </div>
        <div className="form__inputs">
          <label htmlFor="username" className="form__label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form__input"
            placeholder="Enter your username"
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
        </div>
        <div className="form__inputs">
          <label htmlFor="cpassword" className="form__label">
            Confirm Password
          </label>
          <input
            id="cpassword"
            type="password"
            name="cpassword"
            className="form__input"
            placeholder="Confirm your password"
          />
        </div>
        <div className="form__inputs">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form__input"
            placeholder="Enter your email"
          />
        </div>
        <div className="form__inputs">
          <label htmlFor="phnumber" className="form__label">
            Phone Number
          </label>
          <input
            id="phnumber"
            type="text"
            name="phnumber"
            className="form__input"
            placeholder="Enter your phone number"
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
