import styled from 'styled-components';

export const Size = {
  fullSize: '100%',
  contentSize: '1200px',
  detailSize: '786px',
  mobileWidth: 320,
  mobileHeight: 740,
};

export const Color = {
  mainTitle: '#374151',
  contentTitle: '#333d4b',
  contentText: '#495664',
};


export const SectionTitle = styled.p`
font-size: 2rem;
color: Color.contentTitle;
margin-top: 5rem;
margin-bottom: 3rem;
font-family:ArvoRegular;

@media screen and (max-width: 768px) {
  font-size: 1.6rem;
  line-height:2.2rem;
}
`
