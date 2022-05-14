import React from 'react';
import { ContactContainer } from '../style/contactStyle';
import contact from '../img/contact.png';
import { Color } from '../style/globalStyle';

const Contact = () => {
  return (
    <ContactContainer id='3'>
      <p
        style={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: Color.contentTitle,
          marginTop: '5rem',
        }}>
        contact
      </p>
      <div
        style={{
          width: '80%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '2rem',
          paddingLeft: '5rem',
        }}>
        <div>
          <div>
            <p style={{ color: Color.contentTitle, fontWeight: 'bold' }}>
              Phone number
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
              e-mail
            </p>
            <p style={{ color: Color.contentText, margin: '0.5rem' }}>
              khsolution95@gmail.com
            </p>
          </div>
        </div>
        <div>
          <img src={contact} style={{ width: '32rem' }} alt={'contact'} />
        </div>
      </div>
    </ContactContainer>
  );
};
export default Contact;
