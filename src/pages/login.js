import React from 'react';
import Navbar from '../components/Navbar';
import LoginFormSection from '../components/Login/loginFormSection';

const login = () => {
  return (
    <React.Fragment>
      <Navbar className="child-1"></Navbar>
      <LoginFormSection></LoginFormSection>
    </React.Fragment>
  );
};

export default login;
