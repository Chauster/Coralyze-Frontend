import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { IoPersonCircle } from 'react-icons/io5';
import { RiLockPasswordLine } from "react-icons/ri";
import rightimage from '../../images/loginrightimage.svg';
// import './loginFormSection.css'; REPLACED BY SCSS
import './loginFormSection.scss';

function loginFormSection() {
  return (
    <>
      <div className="loginsection">
        <form autoComplete="off" className="form">
          <div class="form__left">
          <h1 class="form__title">Login</h1>
          <div className="form__inputs">
            <div class="form__subtitle">
            <div class="form__icon__username">
              <IoPersonCircle size={30}/>
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
            />
          </div>
          <div className="form__inputs">
          <div class="form__subtitle">
            <div class="form__icon__password">
              <RiLockPasswordLine size={30}/>
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
          </div> {/*  end of left section */}
          <div class="form__right">
            <img src={rightimage}></img>
          </div>
        </form>
      </div>
    </>
  );
}

export default loginFormSection;