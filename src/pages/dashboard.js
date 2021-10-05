import React from 'react';
import Navbar from '../components/Navbar';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';
import Dashboard from '../components/Dashboard/Dashboard';
import '../styles/dashboardstyles.css';

const dashboard = () => {
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
          <Dashboard></Dashboard>
        </div>
      </div>
    </React.Fragment>
  );
};

export default dashboard;
