import React from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import { MY_ORDERS_PATH } from '../../../const/PathVar';

interface TrackingNumBtnProps {
  trackingNum: string;
}

const TrackingNumBtn: React.FC<TrackingNumBtnProps> = ({ trackingNum }) => {
  const param = useParams();
  const navigate = useNavigate();
  const openPopup = () => {
    // window.open(
    //   `${NAVER_SEARCH_URL}${CJ_LOGISTICS}${trackingNum}`,
    //   '_blank',
    //   'width=600,height=400',
    // );
    console.log(trackingNum);
    const orderCode = param.order_code;
    if (param.order_code) {
      navigate(`${MY_ORDERS_PATH}/${orderCode}/track-info`);
    }
  };
  return (
    <TrackingNumBtnWrap>
      <TrackingNumButton onClick={openPopup}>배송 조회</TrackingNumButton>
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
