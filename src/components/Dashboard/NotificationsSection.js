import React, { useState } from "react";
import { Button } from "../Button";
import "./NotificationsSection.css";

function NotificationsSection() {

  const Notification = (props) => {

    return (
      <div className="notif">
        <h3 class="subject">{props.subject}</h3>
        <p class="description">{props.description}</p>
      </div>
    );
  }

  return (
    <div className="main_section">
      <h1 class="main_title">Notifications</h1>
        <div className="notif_box">
          <Notification
          subject="Account Issue"
          description="Some issue occured.">
          </Notification>
        </div>
    </div>
  );
}

export default NotificationsSection
