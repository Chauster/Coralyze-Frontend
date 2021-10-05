import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Documentation/Sidebar';
import TechnicalSection from '../components/Documentation/TechnicalSection';
import Footer from '../components/Footer/Footer';
// import '../styles/pagestyles.css';

const documentation = () => {
  return (
    <React.Fragment>
      <Navbar className="child-1"></Navbar>
      <Sidebar></Sidebar>
      <TechnicalSection></TechnicalSection>
      {/* <Footer></Footer> */}
    </React.Fragment>
  );
};

export default documentation;
