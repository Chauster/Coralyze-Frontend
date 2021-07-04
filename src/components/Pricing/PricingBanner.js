import React from 'react';
import { Button } from '../Button';
import './PricingBanner.css';
import saleimg from '../../images/saletags.svg';

function PricingBanner() {
  return (
    <section class="banner">
      <div className="banner__data">
        <h1>Competitive Pricing.</h1>
        <div className="banner_text">
          <p>
            The ability to lease our servers for remote access to CCTV feed.
          </p>
          <p>Having your own server means more</p>
          <p>More storage. More security. More benefits.</p>
          <div className="banner__button">
            <a href="#pricing_packages">
              <Button buttonSize="btn--wide" buttonColor="blue">
                View Options
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="banner__image">
        <img src={saleimg} alt="sale-image" />
      </div>
    </section>
  );
}

export default PricingBanner;
