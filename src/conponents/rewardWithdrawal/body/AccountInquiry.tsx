import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { rewardAccountAtom } from '../../../states/withdrawalAtom';

const AccountInquiry: React.FC = () => {
  const rewardAccount = useRecoilValue(rewardAccountAtom);

  return (
    <AccountInquiryContainer>
      <Title>인출 계좌 조회</Title>
      {rewardAccount ? (
        <Link to="/reward-accounts">변경하기</Link>
      ) : (
        <Link to="/reward-accounts">등록하기</Link>
      )}
    </AccountInquiryContainer>
  );
};

const AccountInquiryContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px ${({ theme }) => theme.paddings.base};
  border-top: 1px solid ${({ theme }) => theme.grey.Grey2};
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
  a {
    font: ${({ theme }) => theme.fontSizes.Body2};
    color: ${({ theme }) => theme.mainColor.Orange5};
  }
`;

const Title = styled.p`
  font: ${({ theme }) => theme.fontSizes.Body3};
`;

export default AccountInquiry;
