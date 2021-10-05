import React from 'react';
import './DashboardNavbar.scss';
import { Link } from 'react-router-dom';
// import { RiDashboardLine } from 'react-icons/ri';
// import { BiDevices, BiSupport, BiLogOut } from 'react-icons/bi';
// import { IoMdNotificationsOutline } from 'react-icons/io';
// import { MdOutlineManageAccounts } from 'react-icons/md';
// import { IoSettingsOutline } from 'react-icons/io5';
// import logo from '../../images/logo-2.png';

const DashboardNavbar = () => {
  return (
    <div>
      <nav class="dashnavbar">
        {/* <div class="dashnavbar__logo">
          <Link to="/dashboard">
            <img src={logo} alt="Coralyze Logo"></img>
          </Link>
        </div> */}
        <ul className="dashnavbar__parent">
          <li className="dashnavbar__child">
            Status
            <ul class="dashnavbar__links">
              <li>
                <Link to="/dashboard">
                  {/* <RiDashboardLine class="dashnavbar__links__icon" /> */}
                  <span class="dashnavbar__links__label">Dashboard</span>
                </Link>
              </li>
              {/* <li> */}
              {/* <Link to="/devices"> */}
              {/* <BiDevices class="dashnavbar__links__icon" /> */}
              {/* <span class="dashnavbar__links__label">Devices</span> */}
              {/* </Link> */}
              {/* </li> */}
              <li>
                <Link to="/notifications">
                  {/* <IoMdNotificationsOutline class="dashnavbar__links__icon" /> */}
                  <span class="dashnavbar__links__label">Notifications</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="dashnavbar__child">
            Settings
            <ul class="dashnavbar__links">
              <li>
                <Link to="/accountsettings">
                  {/* <MdOutlineManageAccounts class="dashnavbar__links__icon" /> */}
                  {/* <IoSettingsOutline class="dashnavbar__links__icon" /> */}
                  <span class="dashnavbar__links__label">Account</span>
                </Link>
              </li>
              <li>
                <Link to="/devicemanagement">
                  {/* <MdOutlineManageAccounts class="dashnavbar__links__icon" /> */}
                  {/* <IoSettingsOutline class="dashnavbar__links__icon" /> */}
                  <span class="dashnavbar__links__label">
                    Device Management
                  </span>
                </Link>
              </li>
              {/* <li> */}
              {/* <Link to="/support"> */}
              {/* <BiSupport class="dashnavbar__links__icon" /> */}
              {/* <span class="dashnavbar__links__label">Support</span> */}
              {/* </Link> */}
              {/* </li> */}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
