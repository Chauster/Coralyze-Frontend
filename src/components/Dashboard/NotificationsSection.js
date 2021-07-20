import React, { useState } from "react";
import "./NotificationsSection.css";

function NotificationsSection() {

  const Notification = (props) => {

    return (
      <li className="notif">
        <h3 class="subject">{props.subject}</h3>
        <p class="description">{props.description}</p>
      </li>
    );
  }

  return (
    <div className="main_section">
      <h1 class="main_title">Notifications</h1>
        <ul className="notif_box">
          <Notification
          subject="Account Issue"
          description="Some issue occured.">
          </Notification>
          <Notification
          subject="Account Issue"
          description="Some issue occured.">
          </Notification>
          <Notification
          subject="Account Issue"
          description="Some issue occured.">
          </Notification>
          <Notification
          subject="Account Issue"
          description="Some issue occured.">
          </Notification>
          <Notification
          subject="Account Issue"
          description="Some issue occured.">
          </Notification>
          <Notification
          subject="Account Issue"
          description="Some issue occured.">
          </Notification>
          <Notification
          subject="Account Issue"
          description="Some issue occured.">
          </Notification>
        </ul>
    </div>
  );
}

export default NotificationsSection
