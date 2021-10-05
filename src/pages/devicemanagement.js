import React from 'react';
import Navbar from '../components/Navbar';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';
import DeviceManagement from '../components/Dashboard/Settings/DeviceManagement';
import '../styles/dashboardstyles.css';

function devicemanagement() {
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
          <DeviceManagement></DeviceManagement>
        </div>
      </div>
    </React.Fragment>
  );
}

export default devicemanagement;
