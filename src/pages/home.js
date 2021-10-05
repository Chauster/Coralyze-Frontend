import React from 'react';
import Navbar from '../components/Navbar';
import Herosection from '../components/HomePage/Herosection';
import Carousel from '../components/HomePage/Carousel';
import Feature from '../components/HomePage/Featuresection';
import CTA from '../components/HomePage/CTA';
import Footer from '../components/Footer/Footer';
const home = () => {
  return (
    <React.Fragment>
      <Navbar className="child-1"></Navbar>
      <Herosection></Herosection>
      <Carousel></Carousel>
      <Feature></Feature>
      <CTA></CTA>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default home;
