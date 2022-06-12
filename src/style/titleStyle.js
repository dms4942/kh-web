import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Color } from '../style/globalStyle';

export const TitleContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
}
`;

export const ContentContainer = styled.div`
width: 90%;
display: flex;
justify-content: space-around;
@media screen and (max-width: 768px) {
  flex-direction: column;
  justify-content: center;
  align-items:center;
}
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding-top: 4rem;

div > p {
  font-size: 2.2rem;
  color:${Color.contentTitle};
  margin: 0;
  font-family:ArvoRegular;
  line-height:3.2rem;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    line-height:2.2rem;
    text-align:center;
  }
}

@media screen and (max-width: 768px) {
  justify-content: center;
  align-items:center;
  padding-top: 2rem;

}
`;

export const LearnMore = styled(Link)`
  color: #7563ff; 
  cursor: pointer; 
  display:flex;
  width:8rem;
  height:2rem ; 
  justify-content:center;
  align-items:center; 
  background-color:#edefff;
  border:1px solid #7563ff;
  @media screen and (max-width: 768px) {
   margin-top: 2rem;
   margin-bottom:2rem;
  }
`;

export const TitleImage = styled.img`
width: 35rem;
@media screen and (max-width: 768px) {
  width: 90vw;

`;