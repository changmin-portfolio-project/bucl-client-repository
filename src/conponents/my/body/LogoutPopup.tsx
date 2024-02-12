import React, { Dispatch, SetStateAction } from 'react';
import PopupLayout from '../../layout/PopupLayout';
import styled from 'styled-components';
import { postLogout } from '../../../services/auth/postLogout';

interface EditProfilePopupProps {
  setPopupOpen: Dispatch<SetStateAction<boolean>>;
}

const LogoutPopup: React.FC<EditProfilePopupProps> = ({ setPopupOpen }) => {
  const deleteBtnOnClick = () => {
    setPopupOpen(false);
  };
  const registerBasicImgOnClick = () => {
    postLogout().then(() => {
      deleteBtnOnClick();
      localStorage.removeItem('access-token');
      window.location.replace('/');
    });
  };

  return (
    <PopupLayout>
      <LogoutPopupContainer>
        <>
          <Title>
            로그아웃 하시겠습니까?
            <DeleteBtn onClick={deleteBtnOnClick}>
              <LogoutBtnImg src="/assets/XGreyButton.svg" />
            </DeleteBtn>
          </Title>
          <StyleLogoutButton onClick={registerBasicImgOnClick}>
            로그아웃
          </StyleLogoutButton>
        </>
      </LogoutPopupContainer>
    </PopupLayout>
  );
};

const LogoutPopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  background-color: white;
  border-radius: 4px;
`;

const Title = styled.p`
  position: relative;
  padding: 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Body3};
  font-size: 16px;
`;
const DeleteBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-25%, -50%);
  background-color: transparent;
  border: none;
`;
const StyleLogoutButton = styled(Title)`
  color: ${({ theme }) => theme.grey.Grey6};
  font: ${({ theme }) => theme.fontSizes.Body3};
  font-size: 16px;
  border-bottom: 0px;
`;

const LogoutBtnImg = styled.img`
  vertical-align: middle;
`;

export default LogoutPopup;
