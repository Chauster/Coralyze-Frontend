import React, { useRef, useEffect } from 'react';
import './Footer.scss';
import logo from '../../images/logo-2.png'
import github from '../../images/icon-github.svg'
import facebook from '../../images/icon-facebook.svg'
import instagram from '../../images/icon-instagram.svg'
const Footer = () => {
    return (
    <footer class="footer">
        <a href="/" class="footer__logo">
            <img src={logo} alt=""></img>
        </a>

      <div className="footer__links col1">
        <a href="/faqs">FAQ</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="footer__links col2">
        <a href="/documentation">Documentation</a>
        <a href="/">Blog</a>
        <a href="/">Privacy Policy</a>
      </div>
      <div className="footer__copyright">Team INJECT. All rights reserved.</div>
    </footer>
    )
}

export default Footer
