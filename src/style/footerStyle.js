import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Color } from './globalStyle';

export const FooterWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  background-color: #fbfbfb;
  padding-top: 2rem;
  padding-left: 3rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    align-items:center;
    padding-left: 0;
  }
`;

export const FooterLogo = styled(Grid)`
  &.MuiGrid-root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 2.5rem;
    @media (max-width: 768px) {
      justify-content: center;
      margin-right:0;
      margin-bottom:1.5rem;
  
    }
  }
`;

export const ServiceItem = styled(Grid)`
  &.MuiGrid-root {
    width: 200px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: flex-start;
    // margin-left: 20px;
    margin-top:0.5rem;
    & > p {
      margin: 0;
      margin-bottom: 1rem;
      font-weight: bold;
      font-size: 14px;
      color: ${Color.contentTitle};
    }
    a {
      color: '#000000';
      cursor: pointer;
      font-size: 0.8rem;
      color: ${Color.contentText};
      font-family: 'Spoqa-Montserrat';
      text-decoration: none;
      margin-bottom: 0.5rem;
    }
    @media (max-width: 768px) {
      margin-bottom:1rem;
      align-items: center;
    }
  }
`;

export const LegalItem = styled(Grid)`
  &.MuiGrid-root {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: flex-start;
    & > p {
      margin: 0;
      margin-bottom: 1rem;
      font-weight: bold;
      font-size: 14px;
      color: ${Color.contentTitle};
    }
    a {
      color: '#000000';
      cursor: pointer;
      font-size: 0.8rem;
      color: ${Color.contentText};
      font-family: 'Spoqa-Montserrat';
      text-decoration: none;
      margin-bottom: 0.5rem;
    }
  }
`;
