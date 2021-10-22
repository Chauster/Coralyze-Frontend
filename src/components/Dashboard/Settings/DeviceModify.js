// import axios from 'axios';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button } from '../../Button';
// import defaultimg from '../../../images/portraits/defaultimg.jpg';
import './DeviceModify.css';
import { FiCpu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function DeviceManagement() {
  const [name, setName] = useState('');
  const [ip_add, setIP] = useState('');
  const [deviceList, setDeviceList] = useState([]);

  let handleNameChange = (event) => {
    setName(event.target.value);
  };

  let handleIPChange = (event) => {
    setIP(event.target.value);
  };

  const clearState = () => {
    setName('');
    setIP('');
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/devices')
      .then((res) => {
        setDeviceList(res.data);
        console.log(res.data); // testing purposes only
      })
      .catch((err) => {
        console.log('No devices to display!');
        console.log('Error: ' + err);
      }, []);
  });

  return (
    <React.Fragment>
      <div className="device-mgmt__container">
        <div className="device-mgmt__container-header">Device Modification</div>
        {/* device list start */}
        <ul className="dev__list">
          {Object.keys(deviceList).map((device) => (
            <li className="dev__box">
              <span className="dev__icon">
                <FiCpu />
              </span>
              <br />
              <span key={deviceList[device]._id} className="dev__name">
                {deviceList[device].name}
              </span>
              <br />
              <span key={deviceList[device]._id} className="dev__ip">
                {deviceList[device].ip_add}
              </span>
            </li>
          ))}
        </ul>
        {/* device list end */}
        {/* form start */}
        <div className="device-mgmt__form">
          <form autoComplete="off" className="form" /*onSubmit={handleSubmit}*/>
            <div className="device-mgmt__form-inputs">
              <label htmlFor="name" className="device-mgmt__label">
                New Device Name
              </label>
              <input
                required
                minLength="2"
                id="name"
                type="text"
                name="name"
                placeholder="Enter new device name"
                className="device-mgmt__form-input"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="device-mgmt__form-inputs">
              <label htmlFor="name" className="device-mgmt__label">
                New Device IP
              </label>
              <input
                required
                minLength="2"
                id="ip_add"
                type="text"
                name="ip_add"
                placeholder="Enter new ip address"
                className="device-mgmt__form-input"
                value={ip_add}
                onChange={handleIPChange}
              />
            </div>
            {/* form buttons start */}
            <div className="device-mgmt__button-container">
              <div className="mgmt__btn">
                <Button
                  buttonSize="btn--medium"
                  buttonColor="primary"
                  // type="submit"
                >
                  Edit
                </Button>
              </div>
              <div className="mgmt__btn">
                <Button
                  buttonSize="btn--medium"
                  buttonColor="primary"
                  // type="submit"
                >
                  Remove
                </Button>
              </div>
            </div>
            {/* form buttons end */}
            <span className="dev__note">
              To add a new device, click on the 'Device Management' link on the
              sidebar.
            </span>
          </form>
        </div>
        {/* form end */}
      </div>
    </React.Fragment>
  );
}

export default DeviceManagement;
