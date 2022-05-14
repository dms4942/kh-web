import { Grid } from '@material-ui/core';
import React from 'react';
import logo from '../img/logo.png';
import { FooterLogo, FooterWrapper, NavItem } from '../style/footerStyle';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo item xs={2}>
        <img src={logo} style={{ width: '100%' }} alt={'logo'} />
      </FooterLogo>
      <NavItem item>
        <p>about us</p>
        <p>services</p>
        <p>contact</p>
      </NavItem>
    </FooterWrapper>
  );
};

export default Footer;
