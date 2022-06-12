import styled from 'styled-components';

export const ContactContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
width: 100%;
max-width:1200px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-top: 2rem;
padding-left: 5rem;
@media screen and (max-width: 768px) {
  flex-direction: column;
  justify-content: center;
  padding-left: 0;

}
`
export const ContactImage = styled.img`
width: 32rem;
@media screen and (max-width: 768px) {
  width:90vw;
margin-top:5rem;
}
`