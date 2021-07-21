import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../Button';
import { CgNametag } from 'react-icons/cg';
import { GiFamilyTree } from 'react-icons/gi';
import { IoPersonCircle } from 'react-icons/io5';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';
// import './registerFormSection.css'; REPLACED BY SCSS
import './registerFormSection.scss';

function RegisterFormSection() {
  const [_id, setID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // componentDidMount

  let handleIDChange = (event) => {
    setID(event.target.value);
  };

  let handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  let handleFamilyNameChange = (event) => {
    setFamilyName(event.target.value);
  };

  let handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  let handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // let handleConfirmPasswordChange = (event) => {
  //   setConfirmPassword(event.target.value);
  // };

  let handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  let handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      _id: username,
      firstName: firstName,
      familyName: familyName,
      username: username,
      password: password,
      // confirmPassword: setConfirmPassword,
      email: email,
      phone: phone,
    };

    // for testing purposes
    console.log(user);

    axios
      .post('http://localhost:5000/users/add', user)
      .then((res) => console.log(res.data));

    // set state of form fields to empty after submit
  };

  return (
    <>
      <div className="registersection">
        <form autoComplete="off" className="form" onSubmit={handleSubmit}>
          <h1 class="form__title">Account Registration</h1>
          <div className="form__inputs">
            <div class="form__subtitle">
              <div class="form__icon__firstname">
                <CgNametag size={30} />
              </div>
              <label htmlFor="fname" className="form__label">
                First Name
              </label>
            </div>
            <input
              required
              minLength="2"
              id="fname"
              type="text"
              name="fname"
              className="form__input"
              placeholder="Enter your first name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="form__inputs">
            <div class="form__subtitle">
              <div class="form__icon__familyname">
                <GiFamilyTree size={30} />
              </div>
              <label htmlFor="faname" className="form__label">
                Family Name
              </label>
            </div>
            <input
              required
              minLength="2"
              id="faname"
              type="text"
              name="faname"
              className="form__input"
              placeholder="Enter your family name"
              value={familyName}
              onChange={handleFamilyNameChange}
            />
          </div>
          <div className="form__inputs">
            <div class="form__subtitle">
              <div class="form__icon__username">
                <IoPersonCircle size={30} />
              </div>
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
              onChange={(handleIDChange, handleUsernameChange)}
            />
          </div>
          <div className="form__inputs">
            <div class="form__subtitle">
              <div class="form__icon__password">
                <RiLockPasswordLine size={30} />
              </div>
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
          <div className="form__inputs">
            <div class="form__subtitle">
              <div class="form__icon__cpassword">
                <RiLockPasswordLine size={30} />
              </div>
              <label htmlFor="cpassword" className="form__label">
                Confirm password
              </label>
            </div>
            <input
              disabled
              id="cpassword"
              type="password"
              name="cpassword"
              className="form__input"
              placeholder="Confirm your password (field currently disabled)"
              // value={confirmPassword}
              // onChange={handleConfirmPasswordChange}
            />
          </div>
          <div className="form__inputs">
            <div class="form__subtitle">
              <div class="form__icon__email">
                <HiOutlineMail size={30} />
              </div>
              <label htmlFor="email" className="form__label">
                Email
              </label>
            </div>
            <input
              required
              title="The domain portion of the email address is invalid (the portion after the @)."
              pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
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
            <div class="form__subtitle">
              <div class="form__icon__phnumber">
                <BiPhoneCall size={30} />
              </div>
              <label htmlFor="phnumber" className="form__label">
                Phone Number
              </label>
            </div>
            <input
              required
              minLength="10"
              maxLength="10"
              // pattern="[-+]?[0-9]"
              id="phnumber"
              type="numeric"
              name="phnumber"
              className="form__input"
              placeholder="Enter your phone number"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div className="form__btn">
            <Button buttonSize="btn--wide" buttonColor="blue" type="submit">
              Register Now
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterFormSection;
