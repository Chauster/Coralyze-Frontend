import React from 'react';
import Navbar from '../components/Navbar';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';
import DeviceSection from '../components/Dashboard/DeviceSection';
import '../styles/dashboardstyles.css';

function devices() {
  return (
    <React.Fragment>
      <div className="parent">
        <div className="child-1">
          <Navbar></Navbar>
        </div>
        <div className="child-2">
          <div className="sub-child">
            <DashboardNavbar></DashboardNavbar>
          </div>
        </div>
        <div className="child-3">
          <DeviceSection></DeviceSection>
        </div>
      </div>
    </React.Fragment>
  );
}

export default devices;
