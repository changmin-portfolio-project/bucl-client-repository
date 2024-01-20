import React from 'react';
import styled from 'styled-components';
import OutlineButton from '../../OutlineButton';

const SocialPromotion: React.FC = () => {
  const OutlineButtonStyle: React.CSSProperties = {
    marginBottom: '20px',
    padding: '5px 0',
    width: '65%',
  };
  return (
    <SocialPromotionContainer>
      <Title>
        <span>SNS</span>에 바로 홍보해보세요!
      </Title>
      <OutlineButton
        style={OutlineButtonStyle}
        font="Body1"
        border="Orange5"
        color="Orange5"
      >
        지금 공유하기
      </OutlineButton>
    </SocialPromotionContainer>
  );
};

const SocialPromotionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${({ theme }) => theme.paddings.base};
  padding-top: 30px;
`;

const Title = styled.p`
  margin-bottom: 10px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: ${({ theme }) => theme.grey.Grey7};
  span {
    color: ${({ theme }) => theme.mainColor.Orange5};
  }
`;

export default SocialPromotion;
