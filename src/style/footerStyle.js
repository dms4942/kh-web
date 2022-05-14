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
`;

export const FooterLogo = styled(Grid)`
  &.MuiGrid-root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: 'red';
    padding-left: 2rem;
    margin-right: 5rem;
  }
`;

export const ServiceItem = styled(Grid)`
  &.MuiGrid-root {
    width: 200px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: flex-start;
    margin-left: 50px;
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
