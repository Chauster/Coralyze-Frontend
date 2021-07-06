import React from 'react';
import { Button } from '../Button';
import { CgNametag } from "react-icons/cg";
import { GiFamilyTree } from "react-icons/gi";
import { IoPersonCircle } from 'react-icons/io5';
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
// import './registerFormSection.css'; REPLACED BY SCSS
import './registerFormSection.scss';

function registerFormSection() {
  return (
    <>
      <div className="registersection">
        <form autoComplete="off" className="form">
        <h1 class="form__title">Account Registration</h1>
          <div className="form__inputs">
          <div class="form__subtitle">
            <div class="form__icon__firstname">
              <CgNametag size={30}/>
            </div>
            <label htmlFor="fname" className="form__label">
              First Name
            </label>
            </div>
            <input
              id="fname"
              type="text"
              name="fname"
              className="form__input"
              placeholder="Enter your first name"
            />
          </div>
          <div className="form__inputs">
          <div class="form__subtitle">
            <div class="form__icon__familyname">
              <GiFamilyTree size={30}/>
            </div>
            <label htmlFor="faname" className="form__label">
              Family Name
            </label>
            </div>
            <input
              id="faname"
              type="text"
              name="faname"
              className="form__input"
              placeholder="Enter your family name"
            />
          </div>
          <div className="form__inputs">
          <div class="form__subtitle">
            <div class="form__icon__username">
              <IoPersonCircle size={30}/>
            </div>
            <label htmlFor="username" className="form__label">
              Username
            </label>
            </div>
            <input
              id="username"
              type="text"
              name="username"
              className="form__input"
              placeholder="Enter your username"
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
              id="password"
              type="password"
              name="password"
              className="form__input"
              placeholder="Enter your password"
            />
          </div>
          <div className="form__inputs">
          <div class="form__subtitle">
            <div class="form__icon__cpassword">
              <RiLockPasswordLine size={30}/>
            </div>
            <label htmlFor="cpassword" className="form__label">
              Confirm password
            </label>
            </div>
            <input
              id="cpassword"
              type="password"
              name="cpassword"
              className="form__input"
              placeholder="Confirm your password"
            />
          </div>
          <div className="form__inputs">
          <div class="form__subtitle">
            <div class="form__icon__email">
              <HiOutlineMail size={30}/>
            </div>
            <label htmlFor="email" className="form__label">
              Email
            </label>
            </div>
            <input
              id="email"
              type="email"
              name="email"
              className="form__input"
              placeholder="Enter your email"
            />
          </div>
          <div className="form__inputs">
          <div class="form__subtitle">
            <div class="form__icon__phnumber">
              <BiPhoneCall size={30}/>
            </div>
            <label htmlFor="phnumber" className="form__label">
              Phone Number
            </label>
            </div>
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
              Register Now
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default registerFormSection;
