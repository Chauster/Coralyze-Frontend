import React from 'react';
import './DashboardNavbar.scss';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
  return (
    <div>
      <nav class="dashnavbar">
        <ul className="dashnavbar__parent">
          <li className="dashnavbar__child">
            Status
            <ul class="dashnavbar__links">
              <li>
                <Link to="/dashboard">
                  <span class="dashnavbar__links__label">Dashboard</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="dashnavbar__child">
            Settings
            <ul class="dashnavbar__links">
              <li>
                <Link to="/accountsettings">
                  <span class="dashnavbar__links__label">Account</span>
                </Link>
              </li>
              <li>
                <Link to="/devicemanagement">
                  <span class="dashnavbar__links__label">
                    Device Management
                  </span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
