import React from 'react';
import styled from 'styled-components';
import PopupLayout from '../../layout/PopupLayout';
import { Link } from 'react-router-dom';

interface WithdrawOrderPopupProps {
  withdrawOrderBtnOnClick: () => void;
}

const WithdrawOrderPopup: React.FC<WithdrawOrderPopupProps> = ({
  withdrawOrderBtnOnClick,
}) => {
  return (
    <PopupLayout onClick={withdrawOrderBtnOnClick}>
      <WithdrawOrderPopupBox>
        <Title>알림</Title>
        <Notice>
          현재 교환 및 반품은
          <br />
          고객 센터 문의를 통해서만 가능합니다.
          <br />
          고객센터 문의는 평일 09:00~22:00 이용 가능합니다.
        </Notice>
        <KakaoTalkChannelBtn>
          <Link to="/">카카오톡 채널 바로가기</Link>
        </KakaoTalkChannelBtn>
      </WithdrawOrderPopupBox>
    </PopupLayout>
  );
};

const WithdrawOrderPopupBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: 86%;
  background-color: white;
  border-radius: 4px;
`;
const Title = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
`;
const Notice = styled.p`
  margin-bottom: 8px;
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey6};
`;

const KakaoTalkChannelBtn = styled.button`
  margin: 0 auto;
  padding: 5px 0;
  width: 86%;
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border: none;
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  font-weight: 500;
  a {
    color: white;
  }
`;

export default WithdrawOrderPopup;
