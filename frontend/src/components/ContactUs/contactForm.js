import React, { useState } from 'react';
import { Button } from '../Button';
import ContactUs from '../../images/contactusv2.svg';
import './contactForm.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');

  let handleNameChange = (event) => {
    setName(event.target.value);
  };

  let handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  let handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  let handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  let handleSubmit = (event) => {
    alert(`${name} ${email} ${phone} ${question}`);
    event.preventDefault();
  };

  return (
    <>
      <div className="form__container">
        <div className="form__content-left">
          <img src={ContactUs} alt="" />
        </div>
        <div className="form__content-right">
          <form autoComplete="off" className="form" onSubmit={handleSubmit}>
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
                value={name}
                onChange={handleNameChange}
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
                value={email}
                onChange={handleEmailChange}
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
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div className="form__inputs">
              <label htmlFor="question" className="form__label">
                Enquiry
              </label>
              <textarea
                id="question"
                type="question"
                name="question"
                className="form__input"
                placeholder="Ask us anything!"
                value={question}
                onChange={handleQuestionChange}
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

export default ContactForm;
