import React from 'react';
import Navbar from '../components/Navbar';
import RegisterFormSection from '../components/Register/registerFormSection';

const register = () => {
  return (
    <React.Fragment>
      <Navbar className="child-1"></Navbar>
      <RegisterFormSection></RegisterFormSection>
    </React.Fragment>
  );
};

export default register;
