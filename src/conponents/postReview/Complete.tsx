import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Complete: React.FC = () => {
  return (
    <CompleteContainer>
      <Text>
        <span>리뷰 작성</span>이 완료되었습니다.
      </Text>
      <BtnBox>
        <ExploreMoreBtn>
          <Link to={'/'}>더 둘러보기</Link>
        </ExploreMoreBtn>
        <OrderHistoryBtn>
          <Link to={'/my/orders'}>주문 내역</Link>
        </OrderHistoryBtn>
      </BtnBox>
    </CompleteContainer>
  );
};

const CompleteContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.p`
  font: ${({ theme }) => theme.fontSizes.Headline};
  span {
    color: ${({ theme }) => theme.mainColor.Orange5};
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 7% 0 7%;
  width: calc(100% - 14%);
`;
const ExploreMoreBtn = styled.button`
  padding: 13px 0;
  width: 48%;
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border: none;
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Subhead1};
  a {
    color: white;
  }
`;
const OrderHistoryBtn = styled(ExploreMoreBtn)`
  background-color: ${({ theme }) => theme.grey.Grey8};
`;

export default Complete;
