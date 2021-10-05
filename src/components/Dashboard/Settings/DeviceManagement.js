// import axios from 'axios';
import axios from 'axios';
import React, { useState } from 'react';
import { Button } from '../../Button';
// import defaultimg from '../../../images/portraits/defaultimg.jpg';
import './DeviceManagement.css';
import { FiCpu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function DeviceManagement() {
  const [name, setName] = useState('');
  const [ip_add, setIP] = useState('');
  const [port, setPort] = useState('');

  let handleNameChange = (event) => {
    setName(event.target.value);
  };

  let handleIPChange = (event) => {
    setIP(event.target.value);
  };

  let handlePortChange = (event) => {
    setPort(event.target.value);
  };

  const clearState = () => {
    setName('');
    setIP('');
    setPort('');
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    const device = {
      _id: name,
      name: name,
      ip_add: ip_add,
      port: port,
    };

    // for testing purposes
    console.log(device);

    axios.post('http://localhost:5000/devices/add', device).then((res) => {
      alert(`${res.data}`);
      console.log(res.data);
      console.log('Device added.');
      clearState();
      // load devices from backend
    });
  };

  const Device = (props) => {
    return (
      <li className="dev__box">
        <Link to="/devicemanagement">
          <span className="dev__icon">
            <FiCpu />
          </span>
          <br />
          <span className="dev__name">{props.name}</span>
          <br />
          <span className="dev__ip">{props.ip_add}</span>
          <span className="ip-port__separator">:</span>
          <span className="dev__port">{props.port}</span>
        </Link>
      </li>
    );
  };

  let testFunction = () => {
    alert(`Functionality still under development.`);
  };

  return (
    <React.Fragment>
      <div className="device-mgmt__container">
        <div className="device-mgmt__container-header">Device Management</div>
        {/* device list start */}
        <ul className="dev__list">
          <Device name="Tinker Edge T" ip_add="192.168.1.1" port="22"></Device>
          <Device name="NVIDIA Xavier" ip_add="192.168.1.2" port="22"></Device>
          <Device name="Tinker Edge R" ip_add="192.168.1.3" port="22"></Device>
          <Device name="Acer AiSage" ip_add="192.168.1.4" port="22"></Device>
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
            <div className="device-mgmt__form-inputs">
              <label htmlFor="name" className="device-mgmt__label">
                Device Port
              </label>
              <input
                required
                minLength="2"
                id="port"
                type="text"
                name="port"
                placeholder="Enter device port"
                className="device-mgmt__form-input"
                value={port}
                onChange={handlePortChange}
              />
            </div>
          </form>
        </div>
        {/* form end */}
        {/* form buttons start */}
        <div className="device-mgmt__button-container">
          <Button buttonSize="btn--medium" buttonColor="primary" type="submit">
            Add Device
          </Button>
        </div>
        {/* form buttons end */}
      </div>
    </React.Fragment>
  );
}

export default DeviceManagement;
