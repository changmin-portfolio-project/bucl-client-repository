import React, { useState } from 'react';
import PopupLayout from './layout/PopupLayout';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import OutlineButton from './OutlineButton';
import ColoredButton from './ColoredButton';
import { animation } from '../style/animation';
import { confirmPopupAtom } from '../states/functionAtom';

interface ConfirmPopupProps {
  message: string[];
  confirmFunc: () => void;
  to?: string;
}

const ConfirmPopup: React.FC<ConfirmPopupProps> = ({
  message,
  confirmFunc,
  to = '',
}) => {
  const [popupOpen, setPopupOpen] = useRecoilState(confirmPopupAtom);

  const [confirmBoolean, setConfirmBoolean] = useState<boolean>(false);
  const confirmBooleanClick = () => {
    if (popupOpen) {
      confirmFunc();
      setConfirmBoolean(true);
    }
  };
  const closePopupClick = () => {
    setPopupOpen(false);
  };
  const confirmBtnOnClick = () => {
    if (popupOpen) {
      setPopupOpen(false);
      if (to === '') {
        window.location.reload();
      }
    }
  };

  const OutlineButtonStyle: React.CSSProperties = {
    padding: '8px 0',
  };
  const ColoredButtonStyle: React.CSSProperties = {
    padding: '8px 0',
    height: '100%',
  };
  return (
    <PopupLayout>
      <PurchaseConfirmPopupBox>
        <ExplainText>{confirmBoolean ? message[1] : message[0]}</ExplainText>
        <CancelConfirmBtnBox>
          {confirmBoolean ? (
            <ColoredButton
              onClick={confirmBtnOnClick}
              font="Subhead2"
              color="white"
            >
              확인
            </ColoredButton>
          ) : (
            <>
              <CancelBtnBox>
                <OutlineButton
                  onClick={closePopupClick}
                  style={OutlineButtonStyle}
                  font="Subhead2"
                  border="Orange5"
                  color="Orange5"
                >
                  취소
                </OutlineButton>
              </CancelBtnBox>
              <ConfirmBtnBox>
                <ColoredButton
                  style={ColoredButtonStyle}
                  onClick={confirmBooleanClick}
                  font="Subhead2"
                  color="white"
                >
                  확인
                </ColoredButton>
              </ConfirmBtnBox>
            </>
          )}
        </CancelConfirmBtnBox>
      </PurchaseConfirmPopupBox>
    </PopupLayout>
  );
};

const PurchaseConfirmPopupBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 15px ${({ theme }) => theme.paddings.base} 40px
    ${({ theme }) => theme.paddings.base};
  width: calc(100% - (${({ theme }) => theme.paddings.base}*2));
  background-color: white;
  border-radius: 8px 8px 0 0;
  animation: ${animation.slideUp} 0.2s ease-in-out;
`;
const ExplainText = styled.p`
  padding-bottom: 12px;
  font: ${({ theme }) => theme.fontSizes.Body3};
`;
const CancelConfirmBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;
const CancelBtnBox = styled.div`
  width: 48%;
`;
const ConfirmBtnBox = styled(CancelBtnBox)``;

export default ConfirmPopup;
