import styled from 'styled-components';
import { Color } from '../style/globalStyle';

export const AboutContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: #fbfbfb;
  @media (max-width: 768px) {
    justify-content: flex-start;
    min-height:60vh;
    height: auto;
    padding-bottom:3rem;

  } 
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  } 
`
export const ContentConatiner = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 1rem;

@media (max-width: 768px) {
  display: none;
} 
`
export const MobileTabContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction:column;
    // justify-content: space-between;
    // align-items: center;
  } 
  .Collapsible__contentInner {
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  .Collapsible__trigger {
    border: 1.5px solid #333d4b;
    margin-bottom:1rem;
  }
  .is-open {
    font-weight:bold;
  }
  .is-closed {
    font-weight:400;
  }
  
`
export const MobileTab = styled.div`
  display: none;
  @media (max-width: 768px) {
    width:90vw;
    display: flex;
    padding: 1rem 0;
    border:1px solid #333d4b;
    padding-left:0.5rem;
  } 
`