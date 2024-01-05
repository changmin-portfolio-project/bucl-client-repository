import React from 'react';
import styled from 'styled-components';

const Introduction: React.FC = () => {
  return (
    <IntroductionContainer>
      <LogoBox>
        <img src="/assets/BuclIcon.svg" />
      </LogoBox>
      <HelloText>안녕하세요!</HelloText>
      <HelpText>도움이 필요하신가요?</HelpText>
    </IntroductionContainer>
  );
};

const IntroductionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  border-bottom: 6px solid ${({ theme }) => theme.grey.Grey2};
`;

const LogoBox = styled.div`
  padding-bottom: 10px;
  width: 10%;
  img {
    width: 100%;
    aspect-ratio: 1/1;
  }
`;
const HelloText = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body4};
`;
const HelpText = styled(HelloText)`
  font: ${({ theme }) => theme.fontSizes.Subhesd3};
  font-weight: 700;
`;

export default Introduction;
