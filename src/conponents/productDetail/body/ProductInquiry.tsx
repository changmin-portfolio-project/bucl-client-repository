import React from 'react';
import styled from 'styled-components';
import TextButton from '../../TextButton';
import { Link } from 'react-router-dom';

const ProductInquiry: React.FC = () => {
  const TextButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: 0,
  };

  return (
    <ProductInquiryContainer>
      <TitleAllBtnBox>
        <TitleText>상품 문의</TitleText>
        <Link to="https://www.notion.so/digitalize-corp/d8f7e2213dcf440d867c4b0d9df76930">
          <TextButton style={TextButtonStyle}>
            카카오톡 채널 바로가기
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </TextButton>
        </Link>
      </TitleAllBtnBox>
    </ProductInquiryContainer>
  );
};

const ProductInquiryContainer = styled.div`
  padding-bottom: 10vh;
`;

const TitleAllBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.paddings.small + ' ' + theme.paddings.base};
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;
const TitleText = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body3};
`;

export default ProductInquiry;
