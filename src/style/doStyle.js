import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Color } from './globalStyle';

export const DoContainer = styled.section`
  width: 100%;
  //   background-color:blue;
  display: flex;
  flex-direction: column;
  //   justify-content: space-between;
  align-items: center;
`;

export const ContentTitle = styled.p`
  font-size: 1rem;
  color: ${Color.contentTitle};
  font-weight: bold;
`;

export const ContentText = styled.p`
  font-size: 0.8rem;
  color: ${Color.contentText};
  line-height: 1.1rem;
  font-weight: 500;
`;
