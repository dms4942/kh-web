import styled from 'styled-components';
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
  font-size: 1.8rem;
  color: ${Color.contentTitle};
  font-weight: bold;
`;

export const ContentText = styled.p`
  font-size: 1rem;
  color: ${Color.contentText};
  line-height: 1.4rem;
  font-weight: 500;
`;

export const RowContainer = styled.div`
max-width:1200px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-bottom: 8rem;
`;

export const TextContainer = styled.div`
max-width:28rem;
display: flex;
flex-direction: column;
justify-content:flex-start;
// align-items: center;
// margin-bottom: 8rem;
`;
