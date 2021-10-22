import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Documentation/Sidebar';
import TechnicalSection from '../components/Documentation/TechnicalSection';
import Footer from '../components/Footer/Footer';

const documentation = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <TechnicalSection></TechnicalSection>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default documentation;
