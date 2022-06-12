import React from 'react';
import logo from '../img/logo.png';
import { Nav, NavbarWrapper, NavItem, NavLogo } from '../style/headerStyle';
import { Link } from 'react-scroll';

const Header = ({ select, setSelect }) => {
  return (
    <NavbarWrapper>
      <Nav container>
        <NavLogo item xs={2}>
          <Link to='0' spy={true} smooth={true} style={{ cursor: 'pointer' }}>
            <img src={logo} style={{ width: '180px' }} alt={'logo'} />
          </Link>
        </NavLogo>
        <NavItem item>
          <Link
            to='1'
            spy={true}
            smooth={true}
            onClick={() => setSelect('about')}
            style={{ fontWeight: select === 'about' ? 'bold' : 'normal',fontSize:'1.2rem' }}>
            About Us
          </Link>
          <Link
            to='2'
            spy={true}
            smooth={true}
            onClick={() => setSelect('service')}
            style={{ fontWeight: select === 'service' ? 'bold' : 'normal',fontSize:'1.2rem' }}>
            Services
          </Link>
          <Link
            to='3'
            spy={true}
            smooth={true}
            onClick={() => setSelect('contact')}
            style={{ fontWeight: select === 'contact' ? 'bold' : 'normal',fontSize:'1.2rem' }}>
            Contact
          </Link>
        </NavItem>
      </Nav>
    </NavbarWrapper>
  );
};

export default Header;
