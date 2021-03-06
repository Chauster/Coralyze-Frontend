import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button } from '../../Button';
// import defaultimg from '../../../images/portraits/defaultimg.jpg';
import './DeviceManagement.css';
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

  // useEffect(() => {
  //   async function fetchDevices() {
  //     const { data } = await axios.post('http://localhost:5000/devices');
  //     setDeviceList(data);
  //     console.log(data);
  //   }
  //   fetchDevices();
  // }, [deviceList]);

  let handleSubmit = (event) => {
    event.preventDefault();

    const device = {
      _id: name,
      name: name,
      ip_add: ip_add,
    };

    axios.post('http://localhost:5000/devices/add', device).then((res) => {
      alert(`${res.data}`);
      console.log(res.data);
      console.log('Device added.');
      clearState();
    });
  };

  return (
    <React.Fragment>
      <div className="device-mgmt__container">
        <div className="device-mgmt__container-header">Device Management</div>
        {/* device list start */}
        <ul className="dev__list">
          {Object.keys(deviceList).map((device) => (
            <li className="dev__box">
              <Link to="/devicemodify">
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
              </Link>
            </li>
          ))}
        </ul>
        {/* device list end */}
        {/* form start */}
        <div className="device-mgmt__form">
          <form autoComplete="off" className="form" onSubmit={handleSubmit}>
            <div className="device-mgmt__form-inputs">
              <label htmlFor="name" className="device-mgmt__label">
                Device Name
              </label>
              <input
                required
                minLength="2"
                id="name"
                type="text"
                name="name"
                placeholder="Enter device name"
                className="device-mgmt__form-input"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="device-mgmt__form-inputs">
              <label htmlFor="name" className="device-mgmt__label">
                Device IP
              </label>
              <input
                required
                minLength="2"
                id="ip_add"
                type="text"
                name="ip_add"
                placeholder="Enter ip address"
                className="device-mgmt__form-input"
                value={ip_add}
                onChange={handleIPChange}
              />
            </div>
            {/* form buttons start */}
            <div className="device-mgmt__button-container">
              <div className="mgmt__btn">
                <Button
                  className="mgmt__button"
                  buttonSize="btn--medium"
                  buttonColor="primary"
                  type="submit"
                >
                  Add
                </Button>
              </div>
            </div>
            {/* form buttons end */}
            <span className="dev__note">
              To edit or remove a device, click on the devices above.
            </span>
          </form>
        </div>
        {/* form end */}
      </div>
    </React.Fragment>
  );
}

export default DeviceManagement;
