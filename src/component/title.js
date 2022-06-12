import React from 'react';
import { TitleContainer,ContentContainer, TextContainer,LearnMore,TitleImage } from '../style/titleStyle';
import main from '../img/main.jpg';
import { Color } from '../style/globalStyle';
import { Link } from 'react-scroll';

const Title = () => {
  return (
    <TitleContainer id='0'>
      <ContentContainer>
        <TextContainer>
          <div>
            <p>
              "Expand your business with us,
            </p>
            <p >
              we will find solutions for any problems you have"
            </p>
          </div>
          <LearnMore
            to='1'
            spy={true}
            smooth={true}
            >
            Learn more
          </LearnMore>
        </TextContainer>
        <div>
          <TitleImage src={main} alt={'main'} />
        </div>
      </ContentContainer>
    </TitleContainer>
  );
};
export default Title;
