import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { IoPersonCircle } from 'react-icons/io5';
import { RiLockPasswordLine } from 'react-icons/ri';
import rightimage from '../../images/loginrightimage.svg';
// import './loginFormSection.css'; REPLACED BY SCSS
import './loginFormSection.scss';

function LoginFormSection() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    // alert(`${username} ${password}`);
    alert(`Check console log.`);

    // get username (should be unique, thus, might not need an object id)
    // check object exists
    // check object password
    // login

    axios
      .get('http://localhost:5000/users/authenticate')
      .then((res) => console.log(res.data));

    // set fields to empty after submit
    // link to dashboard after success
  };

  return (
    <>
      <div className="loginsection">
        <form autoComplete="off" className="form" onSubmit={handleSubmit}>
          <div class="form__left">
            <h1 class="form__title">Login</h1>
            <div className="form__inputs">
              <div class="form__subtitle">
                <div class="form__icon__username">
                  <IoPersonCircle size={30} />
                </div>
                <label htmlFor="name" className="form__label">
                  Username
                </label>
              </div>
              <input
                className="form__input"
                id="name"
                type="text"
                name="name"
                placeholder="Enter username"
                value={username}
                onChange={handleUsernameChange}
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
                className="form__input"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />
              {/* <i id="togglePassword" className="fa fa-eye"></i> */}
            </div>
            <div className="form__login">
              <Button buttonSize="btn--wide" buttonColor="blue" type="submit">
                Login
              </Button>
            </div>
            <div class="form__register">
              <p>Don't have an account? Don't worry.</p>
              <Link to="/register">
                <Button buttonSize="btn--small" buttonColor="blue">
                  Create a new account here.
                </Button>
              </Link>
            </div>
          </div>{' '}
          {/*  end of left section */}
          <div class="form__right">
            <img src={rightimage}></img>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginFormSection;
