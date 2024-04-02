import React, { useEffect } from 'react';
import styled from 'styled-components';
import { NAVER_CALLBACK_URL, NAVER_CLIENT_ID } from '../../const/Naver';
import { useLocation, useNavigate } from 'react-router';
import { postNaverLogin } from '../../services/auth/postNaverLogin';
import { CALLBACK_URL } from '../../const/QueryParamVar';
import { HOME_PATH } from '../../const/PathVar';

const naver = window.naver;
const NaverLoginButton: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const naverLogin = () => {
    const naverInstance = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: {
        color: 'green',
        type: 0,
        height: 50,
      },
    });
    naverInstance.init();
  };

  useEffect(() => {
    naverLogin();
  }, []);

  const handleNaverClick = () => {
    const naverLoginButton = document.getElementById(
      'naverIdLogin_loginButton',
    );
    if (naverLoginButton) naverLoginButton.click();
  };

  const params = new URLSearchParams(location.hash.substring(1));
  const accessToken = params.get('access_token');

  if (accessToken) {
    postNaverLogin(accessToken)
      .then(() => {
        const callbackUrl = sessionStorage.getItem(CALLBACK_URL);
        if (callbackUrl !== null) {
          navigate(callbackUrl);
        } else {
          navigate(HOME_PATH);
        }
      })
      .catch(() => {
        navigate(-2);
      });
  }

  return (
    <NaverBtn onClick={handleNaverClick}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5065 10.658L6.10391 0H0V20H6.49352V9.34204L13.8961 20H20V0H13.5065V10.658Z"
          fill="white"
        />
      </svg>
      네이버로 시작하기
      <div id="naverIdLogin" style={{ display: 'none' }} />
    </NaverBtn>
  );
};

const NaverBtn = styled.button`
  position: relative;
  margin-top: 8px;
  padding: 13px 0;
  width: 100%;
  background-color: #03c75a;
  border: none;
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body3};
  svg {
    position: absolute;
    top: 50%;
    left: 5%;
    width: 1.7rem;
    transform: translate(-0, -50%);
  }
  color: white;
  cursor: pointer;
`;

export default NaverLoginButton;
