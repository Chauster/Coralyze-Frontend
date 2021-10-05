import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactUs/contactForm';
import Footer from '../components/Footer/Footer';
// import '../styles/pagestyles.css';

const contact = () => {
  return (
    <React.Fragment>
      <Navbar className="child-1"></Navbar>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default contact;
