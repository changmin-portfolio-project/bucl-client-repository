import React from 'react';
import styled from 'styled-components';

const ProductInquiry: React.FC = () => {
  return (
    <ProductInquiryContainer>
      <TitleAllBtnBox>
        <TitleText>상품 문의</TitleText>
        <InquiryBtn>
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
        </InquiryBtn>
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
  padding: 8px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;
const TitleText = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body3};
`;
const InquiryBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey6};
  cursor: pointer;
`;

export default ProductInquiry;
