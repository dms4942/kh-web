import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Color } from './globalStyle';

export const NavbarWrapper = styled.header`
  width: 100%;
  height: 75px;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  z-index: 10;
`;

export const Nav = styled(Grid)`
  &.MuiGrid-root {
    display: flex;
    width: 100%;
    height: 65px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 3rem;
    @media (max-width: 1024px) {
      padding: 0;
      width: 100%;
      padding: 0 0.8em;
    }
  }
`;

export const NavLogo = styled(Grid)`
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
    /* margin-left: 50px; */
    & > p,
    a {
      //   color: ${(props) => (props.change === 1 ? '#000000' : '#FFFFFF')};
      color: ${Color.contentTitle};
      cursor: pointer;
      font-size: 1rem;
      font-weight: 400;
      text-decoration: none;
      /* @media (max-width: 1024px) {
        display: none;
      } */
    }
  }
`;
