import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NotificationsSection.css';

function NotificationsSection() {
  const Notification = (props) => {
    return (
      <li className="notif">
        <Link to="/support">
          <span class="subject">{props.subject}</span>
          <br />
          <span class="description">{props.description}</span>
        </Link>
      </li>
    );
  };

  return (
    <div className="main_section">
      <h3>Notifications</h3>
      <ul className="notif_box">
        <Notification
          subject="Account Issue"
          description="Some issue occured."
        ></Notification>
        <Notification
          subject="Account Issue"
          description="Some issue occured."
        ></Notification>
        <Notification
          subject="Account Issue"
          description="Some issue occured."
        ></Notification>
        <Notification
          subject="Account Issue"
          description="Some issue occured."
        ></Notification>
        <Notification
          subject="Account Issue"
          description="Some issue occured."
        ></Notification>
        <Notification
          subject="Account Issue"
          description="Some issue occured."
        ></Notification>
        <Notification
          subject="Account Issue"
          description="Some issue occured."
        ></Notification>
      </ul>
    </div>
  );
}

export default NotificationsSection;
