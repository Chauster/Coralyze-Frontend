import React from 'react';
import Navbar from '../components/Navbar';
import FaqSection from '../components/FAQS/FaqSection';
import Footer from '../components/Footer/Footer';

function faqs() {
  return (
    <React.Fragment>
      <Navbar className="child-1"></Navbar>
      <FaqSection></FaqSection>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default faqs;
