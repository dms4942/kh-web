import React from 'react';
import { ContactContainer,ContentContainer ,ContactImage} from '../style/contactStyle';
import contact from '../img/contact.png';
import { Color, SectionTitle } from '../style/globalStyle';

const Contact = () => {
  return (
    <ContactContainer id='3'>
      <SectionTitle>
        Contact
      </SectionTitle>
      <ContentContainer>
        <div>
          <div>
            <p style={{ color: Color.contentTitle, fontWeight: 'bold' }}>
              Phone Number
            </p>
            <p style={{ color: Color.contentText, margin: '0.5rem' }}>
              +1-917-683-1919 (US)
            </p>
            <p style={{ color: Color.contentText, margin: '0.5rem' }}>
              +82-10-2669-1206 (KR)
            </p>
          </div>
          <div style={{ marginTop: '3rem' }}>
            <p style={{ color: Color.contentTitle, fontWeight: 'bold' }}>
              E-mail
            </p>
            <p style={{ color: Color.contentText, margin: '0.5rem' }}>
              khsol@khbizsolution.com
            </p>
          </div>
        </div>
        <div>
          <ContactImage src={contact} alt={'contact'} />
        </div>
      </ContentContainer>
    </ContactContainer>
  );
};
export default Contact;
