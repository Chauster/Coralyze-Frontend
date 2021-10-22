import React from 'react';
import Navbar from '../components/Navbar';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';
import DeviceModify from '../components/Dashboard/Settings/DeviceModify';
import '../styles/dashboardstyles.css';

function devicemodify() {
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
          <DeviceModify></DeviceModify>
        </div>
      </div>
    </React.Fragment>
  );
}

export default devicemodify;
