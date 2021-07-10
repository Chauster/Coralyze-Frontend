import React from 'react';
import Footer from '../components/HomePage/Footer';
import LoginFormSection from '../components/Login/loginFormSection';

const login = () => {
  return (
    <>
      <LoginFormSection></LoginFormSection>
      {/* for testing purposes - footer may be removed later */}
      <Footer></Footer>
    </>
  );
};

export default login;
