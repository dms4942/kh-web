import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const FooterWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  /* flex-direction: row; */
  /* justify-content: center; */
  /* align-items: center; */
  background-color: '#000000';
`;

export const FooterLogo = styled(Grid)`
  &.MuiGrid-root {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const NavItem = styled(Grid)`
  &.MuiGrid-root {
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 50px;
    & > p,
    a {
      //   color: ${(props) => (props.change === 1 ? '#000000' : '#FFFFFF')};
      color: '#000000';
      cursor: pointer;
      font-size: 1rem;
      font-family: 'Spoqa-Montserrat';
      text-decoration: none;
      /* @media (max-width: 1024px) {
        display: none;
      } */
    }
  }
`;
