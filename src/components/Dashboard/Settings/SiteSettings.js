// import axios from 'axios';
import React from 'react';
import { Button } from '../../Button';
import defaultimg from '../../../images/portraits/defaultimg.jpg';
import './SiteSettings.css';
import { Link } from 'react-router-dom';

function SiteSettings() {
  let testFunction = () => {
    alert(`Sorry boss. Functionality still under development.`);
  };

  return (
    <>
      <section className="settings">
        <div className="settings__header">
          <h2>Settings.</h2>
        </div>
        <div className="settings__content">
          {/* grid starts here */}
          <div className="settings__grid">
            <div className="settings__item">
              <div className="settings__item-header">Settings</div>
              <ul className="settings__navbar-list">
                <li className="settings__navbar-item">
                  <Link to="/accountsettings">Account Information</Link>
                </li>
                <li className="settings__navbar-item">
                  <Link to="/sitesettings">Site Preferences</Link>
                </li>
              </ul>
            </div>
            <div className="settings__item">
              <div className="settings__item-header">UI Preferences</div>
              <div className="adjust__color">
                "light mode"/"dark mode" slider to be added.
              </div>
            </div>
            <div className="settings__item">
              <div className="settings__item-header">Profile</div>
              <div className="profile__image">
                <img src={defaultimg} alt="" />
              </div>
              <div className="profile__edit-btn">
                <Button
                  buttonSize="btn--medium"
                  buttonColor="primary"
                  onClick={testFunction}
                >
                  Edit Profile
                </Button>
              </div>
              <div className="profile__name">Default User</div>
              <div className="profile__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
                aliquam!
              </div>
            </div>
          </div>
          {/* grid ends here */}
        </div>
      </section>
    </>
  );
}

export default SiteSettings;
