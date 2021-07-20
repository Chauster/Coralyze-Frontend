import React from 'react';
import './StreamSection.css';
import stream from '../../images/stream-test.gif';

function StreamSection() {
  return (
    <>
      <div className="stream__container">
        <h3>Video Stream</h3>
        please wait...
        <div className="video__stream">
          <img src={stream} alt="test-stream" />
        </div>
      </div>
    </>
  );
}

export default StreamSection;
