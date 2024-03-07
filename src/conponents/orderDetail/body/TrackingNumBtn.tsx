import React from 'react';
import styled from 'styled-components';

interface TrackingNumBtnProps {
  trackingNum: string;
}

const TrackingNumBtn: React.FC<TrackingNumBtnProps> = ({ trackingNum }) => {
  const openPopup = () => {
    window.open(
      `https://m.search.naver.com/search.naver?query=CJ대한통운${trackingNum}`,
      '_blank',
      'width=600,height=400',
    );
  };
  return (
    <TrackingNumBtnWrap>
      <TrackingNumButton onClick={openPopup}>배송지 조회</TrackingNumButton>
    </TrackingNumBtnWrap>
  );
};

const TrackingNumBtnWrap = styled.button`
  flex: 1;
  padding: 5px 0;
  background-color: white;
  outline: none;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey8};
`;

const TrackingNumButton = styled.div`
  cursor: pointer;
`;

export default TrackingNumBtn;
