import React from 'react';
import './DeviceSection.css';
import { FiCpu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function DeviceSection() {
  return (
    <React.Fragment>
      <div className="main__container">
        <h3>Devices.</h3>
        Retrieve devices from backend.
      </div>
    </React.Fragment>
  );
}

export default DeviceSection;
