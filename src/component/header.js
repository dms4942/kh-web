import { Grid } from '@material-ui/core';
import React from 'react';
import logo from '../img/logo.png';
import { Nav, NavbarWrapper, NavItem, NavLogo } from '../style/headerStyle';

const Header = () => {
  return (
    <NavbarWrapper>
      <Nav container>
        <NavLogo item xs={2}>
          <img src={logo} style={{ width: '100%' }} />
        </NavLogo>
        <NavItem item>
          <p>about us</p>
          <p>services</p>
          <p>contact</p>
        </NavItem>
      </Nav>
    </NavbarWrapper>
  );
};

export default Header;
