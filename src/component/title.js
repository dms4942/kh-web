import React from 'react';
import { TitleContainer } from '../style/titleStyle';
import main from '../img/main.jpg';
import { Color } from '../style/globalStyle';
import { Link } from 'react-scroll';

const Title = () => {
  return (
    <TitleContainer id='0'>
      {/* <input type={'hidden'} name='ref' ref={ref} /> */}
      <div
        style={{
          width: '90%',
          display: 'flex',
          justifyContent: 'space-between',
          //   alignItems: 'center',
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: '8rem',
          }}>
          <div>
            <p
              style={{
                fontSize: '1.2rem',
                color: Color.contentTitle,
                margin: 0,
                fontWeight: 'bold',
              }}>
              “Expand your business with us,
            </p>
            <p
              style={{
                fontSize: '1.2rem',
                color: Color.mainTitle,
                margin: 0,
                marginLeft: '4rem',
                fontWeight: 'bold',
              }}>
              we will find solutions for any problems you have”
            </p>
          </div>
          <Link
            to='1'
            spy={true}
            smooth={true}
            style={{ color: Color.contentText, cursor: 'pointer' }}>
            Learn more
          </Link>
        </div>
        <div>
          <img src={main} style={{ width: '28rem' }} alt={'main'} />
        </div>
      </div>
    </TitleContainer>
  );
};
export default Title;
