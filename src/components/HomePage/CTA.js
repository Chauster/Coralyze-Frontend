import React, { useRef, useEffect } from 'react';
import './CTA.scss';
import ctaImage from '../../images/surveillance.svg';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section class="CTA">
      <div class="CTA__description">
        <div class="CTA__intro">
          <h3>Want to sponsor us?</h3>
          <div class="CTA__message">
            <p>
              Skip the queue and send a message to our team and we'll get you
              started with a pre-alpha Coralyze device.
            </p>
          </div>
          <div class="CTA__cta">
            <Link to="/contact">
              <Button buttonSize="btn--large" buttonColor="blue">
                Message
              </Button>
            </Link>
          </div>
        </div>
        <div class="CTA__image">
          <img src={ctaImage}></img>
        </div>
      </div>
    </section>
  );
};

export default CTA;
