import React from 'react';
import { ContentText, ContentTitle, ServiceContainer,RowContainer,TextContainer,ImageContainer,ServiceImage } from '../style/serviceStyle';
import broadcast from '../img/broadcast.jpg';
import entertain from '../img/entertain.png';
import translate from '../img/translate.jpg';
import development from '../img/development.jpg';
import { SectionTitle} from '../style/globalStyle';

const Service = () => {
  return (
    <ServiceContainer id='2'>
      <SectionTitle>
        Services
      </SectionTitle>
      <RowContainer
        id={'do1'}
       >
        <ImageContainer>
          <ServiceImage
            src={entertain}
            style={{ opacity: 0.9 }}
            alt={'entertain'}
          />
        </ImageContainer>
        <TextContainer>
          <ContentTitle>음반 수출</ContentTitle>
          <div>
          <ContentText>
            이제 K-POP은 국내 영역뿐만이 아닌 세계에서 인정받는 음악으로
            평가받고 있습니다.
          </ContentText>
          <ContentText>
            이에 발맞춰 ‘KH Solution’은 무궁무진한 잠재력을 가진 국내 음반 및
            비트의 미국 시장 진출을 도와드립니다.
          </ContentText>
          <ContentText>
            각 음반 및 비트의 특성을 고려하여 적합한 현지 엔터테인먼트 및
            프로듀서들과 컨택하고 음악의 본연의 가치가 훼손되지 않도록 고객의
            needs를 명확히 전달하겠습니다.
          </ContentText>
          <ContentText>
            계약 이후에 발생가능한 문제들을 사전에 분석하고 대비하여 신뢰할 수
            있는 서비스를 제공드리겠습니다.
          </ContentText>
          </div>
        </TextContainer>
      </RowContainer>
      <RowContainer
        id={'do2'}
       >
        <ImageContainer>
          <ServiceImage src={broadcast} alt={'broadcast'} />
        </ImageContainer>
        <TextContainer>
          <ContentTitle>라인 프로덕션</ContentTitle>
          <div>
          <ContentText>
            해외에서는 촬영하는 ‘1분 1초’가 모두 비용입니다.
          </ContentText>
          <ContentText>
            다수의 경험을 가진 현지 전문가의 촬영 동선 계획 및 촬영 장소,숙식,
            차량 협조를 통해 합리적인 비용을 제안드리며 ‘1초’도 낭비하는 시간이
            없는 촬영이 되도록 하겠습니다.
          </ContentText>
          <ContentText>
            출국 전 필요하신 서류 및 자료들을 안내해 드리며 사전에 철저한 계획을
            통해 촬영팀이 도착함과 동시에 한국어 영어 2개국어가 모두 가능한 현지
            코디의 가이드로 촬영 외적인 부분에서도 불편함이 없으시도록
            함께하겠습니다.
          </ContentText>
        </div>
        </TextContainer>
      </RowContainer>
      <RowContainer
        id={'do3'}
       >
        <ImageContainer>
          <ServiceImage
            src={development}
            alt={'development'}
          />
        </ImageContainer>
        <TextContainer>
          <ContentTitle>{'블로깅 & 개발'}</ContentTitle>
          <div>
          <ContentText>
            인터넷은 우리생활의 일부이자, 경제행위이며 문화현상을 이해하는
            지표로서 온라인 마케팅은 선택이 아닌 필수 입니다.
          </ContentText>
          <ContentText>
            끊임 없이 변화하는 시장속에서 현지에서 다양한 경험을 가진 전문가의
            시장동향 분석을 통해 ‘효과적인’ 블로깅 서비스를 제공드립니다.
          </ContentText>
          <ContentText>
            현지 인플루언서들과 컨택하여 단순한 제품 홍보가 아닌 기업의 니즈를
            명확히 파악하여 ‘차별화’된 블로깅 서비스를 제공드립니다.
          </ContentText>
          <ContentText>
            전문 프로그래머를 통한 기업의 차별성을 부각시킬 수 있는 웹사이트
            개발 서비스 및 앱 개발 서비스를 제공드리며 일회성이 아닌 기업과 함께
            한다는 마인드로 끊임없이 소통하며 기업의 가치를 성장시킬 수 있도록
            하겠습니다.
          </ContentText>
        </div>
        </TextContainer>
      </RowContainer>
      <RowContainer
        id={'do4'}
        >
        <ImageContainer>
          <ServiceImage src={translate}  alt={'translate'} />
        </ImageContainer>
        <TextContainer>
          <ContentTitle>통 ・ 번역 서비스</ContentTitle>
          <div>
          <ContentText>
            더 이상 컨퍼런스(컨벤션)에서 언어만을 통역하는 것으로는 기업의
            가치를 높일 수 없습니다.
          </ContentText>
          <ContentText>
            저희 ‘KH Solution’은 단순한 통・번역 서비스가 아닌 2개국어(한국어,
            영어)에 능통한 한국계 미국인이 서비스를 제공합니다.
          </ContentText>
          <ContentText>
            사전에 기업분석을 통해 기업의 비즈니스 목적을 이해하고 현지 시장
            분석을 통한 기술적 영업이 가능합니다.
          </ContentText>
          <ContentText>
            컨퍼런스(컨벤션) 전 준비하셔야 될 자료들 및 여러 업무들에 관련된
            컨설팅 서비스를 제공드리며 자료 검토기간에 business에 적합한 어휘와
            문법들을 사용하여 번역해 드립니다.
          </ContentText>
          <ContentText>
            컨퍼런스(컨벤션) 참석에 불편함이 없으시도록 자료 및 브로슈어, 박스
            등 인쇄가 필요하실 경우 현지에서 준비가 가능하며 행사 종료 후 현지
            반응도 및 행사에 대한 전문적인 리뷰가 가능합니다.
          </ContentText>
        </div>
        </TextContainer>
      </RowContainer>
    </ServiceContainer>
  );
};
export default Service;
