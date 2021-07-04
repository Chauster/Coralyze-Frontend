import React from 'react';
import logo from '../images/logo-2.png';
import styles from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { Button } from './Button';

const NavbarContainer = styles.div`
margin: 0;
padding: 10px;
line-height: 1.3;
font-family: Montserrat;
font-weight: 300;
display: flex;
justify-content: space-between;
`;
const NavbarWrapper = styles.div`
width: 1920px;
height: 100%;
margin: 0 auto;
z-index: 20;
display: flex;
position: relative;
align-items: center;
justify-content: space-between;
`;
const Logo = styles.img`
padding-top: 8px;
padding-left: 10px
width: 140px;
height: 30px;
max-width: 100% !important;
`;
const Nav = styles.nav`
position: relative;
@media screen and (max-width: 768px) { // Experimental Mobile menu
    display: none;
  }
`;
const NavLink = styles(Link)`
padding: 1.0625rem 1.5rem;
color: #fff;
font-size: 0.875rem;
text-decoration: none;

&:hover {
    color: #3E74FF;
}
`;
const ButtonContainer = styles.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
// const Button = styles.div`
// padding: 0.875rem 2.1875rem;
// border-radius: 5px;
// border: 0;
// color: white;
// font-weight: 400;
// cursor: pointer;
// background: #007cff;
// font-size: 0.875rem;
// -webkit-transition: opacity 300ms ease-in-out;
// transition: opacity 300ms ease-in-out;
// @media screen and (max-width: 768px) { // Experimental Mobile menu
//     display: none;
//   }
// `;
const Spans = styles(FaBars)`
display: none;
color: #fff;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.8rem; 
    cursor: pointer;
}
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <a href="/">
          <Logo src={logo} alt="Coralyze" />
        </a>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/documentation">Documentation</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
        </Nav>
        <ButtonContainer>
          <Link to="/login">
            <Button buttonSize="btn--medium" buttonColor="blue">
              Login
            </Button>
          </Link>
        </ButtonContainer>
      </NavbarWrapper>
      <Spans />
    </NavbarContainer>
  );
};

export default Navbar;
