import React from 'react';
import styled from 'styled-components';
import PopupLayout from '../../layout/PopupLayout';
import { Link } from 'react-router-dom';
import { KAKAO_CHANNEL_LINK } from '../../../const/LinkVar';

interface WithdrawOrderPopupProps {
  withdrawOrderBtnOnClick: () => void;
}

const WithdrawOrderPopup: React.FC<WithdrawOrderPopupProps> = ({
  withdrawOrderBtnOnClick,
}) => {
  return (
    <PopupLayout onClick={withdrawOrderBtnOnClick}>
      <WithdrawOrderPopupBox onClick={(e) => e.stopPropagation()}>
        <Title>알림</Title>
        <Notice>
          현재 교환 및 반품은
          <br />
          고객 센터 문의를 통해서만 가능합니다.
          <br />
          고객센터 문의는 평일 09:00~18:00 이용 가능합니다.
        </Notice>
        <KakaoTalkChannelBtn>
          <Link to={KAKAO_CHANNEL_LINK}>카카오톡 채널 바로가기</Link>
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
  margin: 0 auto 10px auto;
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
