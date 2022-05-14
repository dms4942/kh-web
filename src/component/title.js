import React from 'react';
import { TitleContainer } from '../style/titleStyle';
import main from '../img/main.jpg';

const Title = () => {
  return (
    <TitleContainer>
      <div
        style={{
          width: '80%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <div>
          <p>“Expand your business with us,</p>
          <p> we will find solutions for any problems you have”</p>
          <p>Learn more</p>
        </div>
        <div>
          <img src={main} style={{ width: '500px' }} />
        </div>
      </div>
    </TitleContainer>
  );
};
export default Title;
