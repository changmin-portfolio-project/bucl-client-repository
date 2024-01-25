import React from 'react';
import PopupLayout from '../../layout/PopupLayout';
import styled from 'styled-components';
import { postMemberWithdrawal } from '../../../services/auth/postMemberWithdrawal';
import { withdrawCompleteAtom } from '../../../states/customerAtom';
import { useSetRecoilState } from 'recoil';
import OutlineButton from '../../OutlineButton';
import ColoredButton from '../../ColoredButton';

interface SecessionPopupProps {
  secessionBtnOnClick: () => void;
}

const SecessionPopup: React.FC<SecessionPopupProps> = ({
  secessionBtnOnClick,
}) => {
  const setWithdrawComplete = useSetRecoilState(withdrawCompleteAtom);
  const handleMemberWithdrawal = () => {
    postMemberWithdrawal().then((res) => {
      console.log(res);
      setWithdrawComplete(true);
    });
  };
  return (
    <PopupLayout>
      <SecessionConfirmBox>
        <CheckText>정말 탈퇴하시겠어요?</CheckText>
        <ExplainText>모든 계정 정보가 삭제되며 복구되지 않습니다.</ExplainText>
        <BtnBox>
          <OutlineButton
            onClick={handleMemberWithdrawal}
            color="Grey8"
            border="Grey4"
            font="Subhead2"
          >
            탈퇴하기
          </OutlineButton>
          <ColoredButton
            onClick={secessionBtnOnClick}
            font="Subhead2"
            color="white"
          >
            취소하기
          </ColoredButton>
        </BtnBox>
      </SecessionConfirmBox>
    </PopupLayout>
  );
};

const SecessionConfirmBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px 10px 15px 10px;
  width: 80%;
  background-color: white;
  border-radius: 4px;
`;
const CheckText = styled.p`
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
`;
const ExplainText = styled(CheckText)`
  padding-bottom: 20px;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey6};
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    flex: 0.48;
  }
`;

export default SecessionPopup;
