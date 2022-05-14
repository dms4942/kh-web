import React from 'react';
import logo from '../img/logo.png';
import {
  FooterLogo,
  FooterWrapper,
  LegalItem,
  ServiceItem,
} from '../style/footerStyle';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo xs={2}>
        <img src={logo} style={{ width: '150px' }} alt={'logo'} />
      </FooterLogo>
      <ServiceItem>
        <p>Services</p>
        <Link to='do1' spy={true} smooth={true} offset={-100}>
          음반 수출
        </Link>
        <Link to='do2' spy={true} smooth={true} offset={-100}>
          라인 프로덕션
        </Link>
        <Link to='do3' spy={true} smooth={true} offset={-100}>
          {'블로깅 & 개발'}
        </Link>
        <Link to='do4' spy={true} smooth={true} offset={-100}>
          통번역 서비스
        </Link>
      </ServiceItem>
      <LegalItem>
        <p>Legal</p>
        <Link to='0' spy={true} smooth={true} offset={-100}>
          Terms of Use
        </Link>
        <Link to='0' spy={true} smooth={true} offset={-100}>
          Privacy
        </Link>
        <Link to='0' spy={true} smooth={true} offset={-100}>
          Privacy
        </Link>
        <Link to='0' spy={true} smooth={true} offset={-100}>
          Do Not Sell My Personal Information
        </Link>
      </LegalItem>
    </FooterWrapper>
  );
};

export default Footer;
