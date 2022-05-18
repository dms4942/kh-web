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
          justifyContent: 'space-around',
          //   alignItems: 'center',
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            paddingTop: '4rem',
          }}>
          <div>
            <p
              style={{
                fontSize: '2.2rem',
                color: Color.contentTitle,
                margin: 0,
                // fontWeight: 'bold',
                fontFamily:'ArvoRegular',
                lineHeight:'3.2rem'
              }}>
              Expand your business with us,
            </p>
            <p
              style={{
                fontSize: '2.2rem',
                color: Color.mainTitle,
                margin: 0,
                // marginLeft: '4rem',
                // fontWeight: 'bold',
                fontFamily:'ArvoRegular',
                lineHeight:'3.2rem'


              }}>
              we will find solutions for any problems you have
            </p>
          </div>
          <Link
            to='1'
            spy={true}
            smooth={true}
            style={{ color: '#7563ff', cursor: 'pointer', display:'flex', width:'8rem',height:'2rem' , justifyContent:'center',alignItems:'center', backgroundColor:'#edefff',border:'1px solid #7563ff' }}>
            Learn more
          </Link>
        </div>
        <div>
          <img src={main} style={{ width: '35rem' }} alt={'main'} />
        </div>
      </div>
    </TitleContainer>
  );
};
export default Title;
