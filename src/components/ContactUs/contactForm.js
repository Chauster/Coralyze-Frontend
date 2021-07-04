import React from 'react';
import { Button } from '../Button';
import ContactUs from '../../images/contactus.svg';
import './contactForm.css';

function contactForm() {
  return (
    <>
      <div className="form__container">
        <div className="form__content-left">
          <img src={ContactUs} alt="" />
        </div>
        <div className="form__content-right">
          <form className="form">
            <h1>Contact Us</h1>
            <div className="form__inputs">
              <label htmlFor="name" className="form__label">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="form__input"
                placeholder="Enter your name"
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
              <label htmlFor="phone" className="form__label">
                Phone Number
              </label>
              <input
                id="phone"
                type="phone"
                name="phone"
                className="form__input"
                placeholder="Enter your contact number"
              />
            </div>
            <div className="form__inputs">
              <label htmlFor="text-area" className="form__label">
                Questions
              </label>
              <textarea
                id="text-area"
                type="text-area"
                name="text-area"
                className="form__input"
                placeholder="Enter your questions"
              />
            </div>
            <div className="form__btn">
              <Button buttonSize="btn--wide" buttonColor="blue" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default contactForm;
