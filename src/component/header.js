import { Grid } from '@material-ui/core';
import React from 'react';
import logo from '../img/logo.png';
import { Nav, NavbarWrapper, NavItem, NavLogo } from '../style/headerStyle';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

const Header = ({ select, setSelect }) => {
  return (
    <NavbarWrapper>
      <Nav container>
        <NavLogo item xs={2}>
          <Link to='0' spy={true} smooth={true} style={{ cursor: 'pointer' }}>
            <img src={logo} style={{ width: '100px' }} />
          </Link>
        </NavLogo>
        <NavItem item>
          <Link
            to='1'
            spy={true}
            smooth={true}
            onClick={() => setSelect('about')}
            style={{ fontWeight: select === 'about' ? 'bold' : 'normal' }}>
            about us
          </Link>
          <Link
            to='2'
            spy={true}
            smooth={true}
            onClick={() => setSelect('service')}
            style={{ fontWeight: select === 'service' ? 'bold' : 'normal' }}>
            services
          </Link>
          <Link
            to='3'
            spy={true}
            smooth={true}
            onClick={() => setSelect('contact')}
            style={{ fontWeight: select === 'contact' ? 'bold' : 'normal' }}>
            contact
          </Link>
        </NavItem>
      </Nav>
    </NavbarWrapper>
  );
};

export default Header;
