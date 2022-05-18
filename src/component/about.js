import React, { useState } from 'react';
import { AboutContainer } from '../style/aboutStyle';
import icon01 from '../img/icon01.svg';
import icon02 from '../img/icon02.svg';
import icon03 from '../img/icon03.svg';
import icon04 from '../img/icon04.svg';
import icon05 from '../img/icon05.svg';
import icon06 from '../img/icon06.svg';
import icon07 from '../img/icon07.svg';
import icon08 from '../img/icon08.svg';
import icon09 from '../img/icon09.svg';
import icon10 from '../img/icon10.svg';
import icon11 from '../img/icon11.svg';
import icon12 from '../img/icon12.svg';

import { Color } from '../style/globalStyle';

const About = () => {
  const [select, setSelect] = useState(0);
  const title = [
    {
      title: 'Record Export',
      children: [
        {
          icon: icon01,
          title: '음반 수출',
          content:
            '국내 음반 및 비트를 미국 음악 에이전시 및 프로듀서등에게 수출합니다.',
        },
        {
          icon: icon02,
          title: '음반 발매',
          content: '미국 온 오프라인 시장으로 음반 발매를 도와드립니다.',
        },
        {
          icon: icon03,
          title: '매니지먼트',
          content:
            '계약(발매) 이후 미국 agency (프로듀서)와 지속적인 소통을 도와드립니다.',
        },
      ],
    },
    {
      title: 'Line-Production',
      children: [
        {
          icon: icon04,
          title: '촬영 프로그램 코디',
          content:
            '제작 프로그램 숙지 후 현지 실정에 맞게 최적의 촬영 동선을 설정합니다.',
        },
        {
          icon: icon05,
          title: '현지 가이드',
          content:
            '영어, 한국어 2개국어에 능통한 현지 전문인력이 촬영 기간 동안 가이드를 진행합니다.',
        },
        {
          icon: icon06,
          title: '기회 비용 산출',
          content:
            '숙식, 촬영장소 섭외 등 촬영기간 내 사용되는 비용들에 대해 사전 시장조사를 통해 합리적인 비용을 제안드립니다.',
        },
      ],
    },
    {
      title: 'Blogging & Development',
      children: [
        {
          icon: icon07,
          title: '마케팅 커스터 마이징',
          content:
            '현지 시장 동향을 분석하고 광고주와 지속적인 소통을 통한 1:1 맞춤 광고 제작',
        },
        {
          icon: icon08,
          title: 'SNS 마케팅 / 리뷰 관리',
          content:
            '현지 인플루언서들과 컨택하여 효과적인 블로깅 및 리뷰 관리를 진행합니다.',
        },
        {
          icon: icon09,
          title: '웹 사이트 제작',
          content:
            '인터넷 비즈니스 관련 업무를 ‘One Stop’ 토탈 서비스로 제공합니다.',
        },
      ],
    },
    {
      title: 'Translation Service',
      children: [
        {
          icon: icon10,
          title: '기업 / 시장 분석',
          content:
            '시장 데이터 자료 분석 및 선호도 조사를 통하여 business를 이해하고 사업전략을 파악합니다.',
        },
        {
          icon: icon11,
          title: '번역 서비스',
          content:
            '현지에 사용하실 자료들을 검토 및 영미식에 적합한 어휘와 문법들을 사용하여 수정해드립니다.',
        },
        {
          icon: icon12,
          title: '통역 서비스',
          content:
            '현지 시장 및 business를 완벽하게 이해하고 있는 한국계 미국인들의 디테일한 통역 서비스를 제공드립니다.',
        },
      ],
    },
  ];
  // const title = [{
  //     title: 'Record Export',
  //     children: [{ icon: icon01, title: 'Records Export', content: 'We export albums and beats created in Korea to American music agencies and producers.' },
  //     { icon: icon01, title: 'Record Publish', content: 'We assist you on how to release albums to both online and offline markets in the US.' },
  //     { icon: icon01, title: 'Management', content: '계약(발매) 이후 미국 agency (프로듀서)와 지속적인 소통을 도와드립니다.' }]
  // }, {
  //     title: 'Line-Production', children: [{ icon: '', title: '', content: '' },
  //     { icon: '', title: '', content: '' },
  //     { icon: '', title: '', content: '' }]
  // }, {
  //     title: 'Blogging& website', children: [{ icon: '', title: '', content: '' },
  //     { icon: '', title: '', content: '' },
  //     { icon: '', title: '', content: '' }]
  // }, {
  //     title: 'Translation Service', children: [{ icon: '', title: '', content: '' },
  //     { icon: '', title: '', content: '' },
  //     { icon: '', title: '', content: '' }]
  // }]

  return (
    <AboutContainer id='1'>
      <div style={{ width: '80%' }}>
        <p
          style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: Color.contentTitle,
            marginTop: '5rem',
          }}>
          about us
        </p>
        <p
          style={{
            fontSize: '0.9rem',
            margin: 0,
            color: Color.contentText,
            fontWeight: 600,
            marginTop: '2rem',
          }}>
          ‘KH Solution’은 미국 시장을 타겟으로한 음반 수출, 방송 코디, 마케팅
          사업 등
        </p>
        <p
          style={{
            fontSize: '0.9rem',
            margin: 0,
            color: Color.contentText,
            fontWeight: 600,
          }}>
          여러 분야에서 활약하는 ‘One Stop Shop’ 종합 솔루션 제공 회사 입니다.
        </p>
        {/* <p>
          ‘KH Solution’ is a ‘One Stop Shop’ comprehensive solution firm that is
          active in various fields
        </p>
        <p>
          such as music export, TV production local coordination, and blogging
          targeting the US market.
        </p> */}
      </div>
      <div style={{ flexDirection: 'row', marginTop: '50px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {title.map((item, index) => {
            return (
              <span
                style={{
                  fontSize: '1rem',
                  padding: '10px',
                  fontWeight: select === index ? 'bold' : 400,
                  cursor: 'pointer',
                  color: '#333d4b',
                }}
                onClick={() => setSelect(index)}>
                {item.title}
              </span>
            );
          })}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '1rem',
          }}>
          {title[select].children.map((child, index) => {
            return (
              <div
                style={{
                  width: '12rem',
                  //   backgroundColor: 'white',
                  borderRadius: 25,
                  padding: '1.8rem',
                  paddingTop: '2rem',
                }}>
                <img
                  src={child.icon}
                  style={{ width: '8rem' }}
                  alt={`icon${index}`}
                />
                <p
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    color: Color.contentTitle,
                    marginTop: '1rem',
                  }}>
                  {child.title}
                </p>
                <p style={{ color: Color.contentText, fontSize: '0.8rem' }}>
                  {child.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
