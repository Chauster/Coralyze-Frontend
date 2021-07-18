import React from "react";
import "./DashboardNavbar.scss";
import { RiDashboardLine } from "react-icons/ri";
import { BiDevices, BiSupport } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "../../images/logo-2.png";

const DashboardNavbar = () => {
  return (
    <div>
      <nav class="dashnavbar">
        <div class="dashnavbar__logo">
          <a href="/dashboard">
            <img src={logo} alt="Coralyze Logo"></img>
          </a>
        </div>
        <ul class="dashnavbar__links">
          <li>
            <a href="/dashboard">
              <RiDashboardLine class="dashnavbar__links__icon" />
              <span class="dashnavbar__links__label">Dashboard</span>
            </a>
            {/* <span class="dashnavbar__links__tooltip">Dashboard</span> */}
          </li>
          <li>
            <a href="/devices">
              <BiDevices class="dashnavbar__links__icon" />
              <span class="dashnavbar__links__label">Devices</span>
            </a>
            {/* <span class="dashnavbar__links__tooltip">Devices</span> */}
          </li>
          <li>
            <a href="/notifications">
              <IoMdNotificationsOutline class="dashnavbar__links__icon" />
              <span class="dashnavbar__links__label">Notifications</span>
            </a>
            {/* <span class="dashnavbar__links__tooltip">Notifications</span> */}
          </li>
          <li>
            <a href="/confirmaccount">
              <IoSettingsOutline class="dashnavbar__links__icon" />
              <span class="dashnavbar__links__label">Settings</span>
            </a>
            {/* <span class="dashnavbar__links__tooltip">Settings</span> */}
          </li>
          <li>
            <a href="/support">
              <BiSupport class="dashnavbar__links__icon" />
              <span class="dashnavbar__links__label">Ticket Support</span>
            </a>
            {/* <span class="dashnavbar__links__tooltip">Ticket Support</span> */}
          </li>
        </ul>
      </nav>

      {/* Below is placeholder for now, to be removed later, this is to primarily test the dashnavbar and content widths */}
      {/* <div class="dashboard">
        <div class="dashboard__title">
          <h3>Test</h3>
        </div>
        <div class="dashboard__graph">INPUT GRAPH DATA HERE</div>
      </div> */}
    </div>
  );
};

export default DashboardNavbar;
