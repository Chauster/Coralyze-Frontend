import React from 'react';
import Navbar from '../components/Navbar';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';
import Stream from '../components/Dashboard/StreamSection';

function livestream() {
  return (
    <React.Fragment>
      <Navbar className="child-1"></Navbar>
      <DashboardNavbar></DashboardNavbar>
      <Stream></Stream>
    </React.Fragment>
  );
}

export default livestream;
