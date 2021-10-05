import React from 'react';
import Navbar from '../components/Navbar';
import CTA from '../components/HomePage/CTA';
import Footer from '../components/Footer/Footer';
import PricingBanner from '../components/Pricing/PricingBanner';
import PricingPackages from '../components/Pricing/PricingPackages';

const Pricing = () => {
  return (
    <React.Fragment>
      <Navbar className="child-1"></Navbar>
      <PricingBanner></PricingBanner>
      <PricingPackages></PricingPackages>
      <CTA></CTA>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Pricing;
