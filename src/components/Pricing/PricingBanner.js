import React from 'react';
import { Button } from '../Button';
import './PricingBanner.css';
import saleimg from '../../images/saletags.svg';

function PricingBanner() {
  return (
    <div className="outer__section">
      <div className="banner__text">
        <h1>Competitive Pricing.</h1>
        <p>
          The ability to lease our servers for remote access to CCTV feed.
          Having your own server means more.
        </p>
        <p>More storage. More security. More benefits.</p>
        <a href="#pricing_packages">
          <Button buttonSize="btn--wide" buttonColor="blue">
            View Options
          </Button>
        </a>
      </div>
      <img src={saleimg} alt="saletags" className="banner__img" />
    </div>
  );
}

export default PricingBanner;
