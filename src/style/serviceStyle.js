import styled from 'styled-components';
import { Color } from './globalStyle';

export const ServiceContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentTitle = styled.p`
  font-size: 1.8rem;
  color: ${Color.contentTitle};
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom:0;
  }
`;

export const ContentText = styled.p`
  font-size: 1rem;
  color: ${Color.contentText};
  line-height: 1.4rem;
  font-weight: 500;
  word-break: keep-all;
  `;

export const RowContainer = styled.div`
max-width:1200px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-bottom: 8rem;

@media screen and (max-width: 768px) {
  flex-direction: column;
  max-width:90vw;
}
`;

export const TextContainer = styled.div`
max-width:28rem;
display: flex;
flex-direction: column;
justify-content:flex-start;

`;
export const ImageContainer = styled.div`
margin-right: ;5rem; 
`
export const ServiceImage = styled.img`
width: 30rem;
margin-right: 2rem;
@media screen and (max-width: 768px) {
  width: 90vw;
  margin-right: 0;

}
`