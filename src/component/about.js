import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { AboutContainer } from '../style/aboutStyle';
import icon01 from '../img/icon01.png';

const About = () => {
  const [select, setSelect] = useState(0);
  const title = [
    {
      title: 'Record Export',
      children: [
        {
          icon: icon01,
          title: 'Records Export',
          content:
            '국내 음반 및 비트를 미국 음악 에이전시 및 프로듀서등에게 수출합니다.',
        },
        {
          icon: icon01,
          title: 'Record Publish',
          content: '미국 온 오프라인 시장으로 음반 발매를 도와드립니다.',
        },
        {
          icon: icon01,
          title: 'Management',
          content:
            '계약(발매) 이후 미국 agency (프로듀서)와 지속적인 소통을 도와드립니다.',
        },
      ],
    },
    {
      title: 'Line-Production',
      children: [
        {
          icon: icon01,
          title: '촬영 프로그램 코디',
          content:
            '제작 프로그램 숙지 후 현지 실정에 맞게 최적의 촬영 동선을 설정합니다.',
        },
        {
          icon: icon01,
          title: '현지 가이드',
          content:
            '영어, 한국어 2개국어에 능통한 현지 전문인력이 촬영 기간 동안 가이드를 진행합니다.',
        },
        {
          icon: icon01,
          title: '기회 비용 산출',
          content:
            '숙식, 촬영장소 섭외 등 촬영기간 내 사용되는 비용들에 대해 사전 시장조사를 통해 합리적인 비용을 제안드립니다.',
        },
      ],
    },
    {
      title: 'Blogging& website',
      children: [
        {
          icon: icon01,
          title: '마케팅 커스터 마이징',
          content:
            '현지 시장 동향을 분석하고 광고주와 지속적인 소통을 통한 1:1 맞춤 광고 제작',
        },
        {
          icon: icon01,
          title: 'SNS 마케팅 / 리뷰 관리',
          content:
            '현지 인플루언서들과 컨택하여 효과적인 블로깅 및 리뷰 관리를 진행합니다.',
        },
        {
          icon: icon01,
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
          icon: icon01,
          title: '기업 / 시장 분석',
          content:
            '시장 데이터 자료 분석 및 선호도 조사를 통하여 business를 이해하고 사업전략을 파악합니다.',
        },
        {
          icon: icon01,
          title: '번역 서비스',
          content:
            '현지에 사용하실 자료들을 검토 및 영미식에 적합한 어휘와 문법들을 사용하여 수정해드립니다.',
        },
        {
          icon: icon01,
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
    <AboutContainer>
      <div style={{ width: '80%' }}>
        <p style={{ fontSize: '1.2rem' }}>about us</p>
        <p style={{ fontSize: '1rem' }}>
          ‘KH Solution’는 미국 시장을 타겟으로한 음반 수출, 방송 코디, 마케팅
          사업 등
        </p>
        <p style={{ fontSize: '1rem' }}>
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
      <div style={{ flexDirection: 'row', marginTop: '30px' }}>
        {title.map((item, index) => {
          return (
            <span
              style={{
                fontSize: '1rem',
                padding: '10px',
                fontWeight: select === index ? 'bold' : 'normal',
                cursor: 'pointer',
              }}
              onClick={() => setSelect(index)}>
              {item.title}
            </span>
          );
        })}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '3rem',
          }}>
          {title[select].children.map((child) => {
            return (
              <div
                style={{
                  width: '20%',
                  backgroundColor: 'red',
                  borderRadius: 25,
                  paddingTop: '2rem',
                }}>
                <img src={child.icon} style={{ width: '150px' }} />
                <p style={{ fontWeight: 'bold' }}>{child.title}</p>
                <p>{child.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
