import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper>
        <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
          {/*
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
          <Link to="/">
            <img src={logo} alt="" className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-items ml-5">
              <Link to="/" className="nav-link">
                products
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <i className="fas fa-cart-plus" /> my cart
            </ButtonContainer>
          </Link>
        </nav>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
      color:var(--mainWhite)!important;
      font-size:1.3rem;
      text-transform:capitalize;
  }
`;