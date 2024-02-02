import React from 'react';
import styled from 'styled-components';
import { postKakaoAuthToken } from '../../services/auth/postKakaoAuthToken';
import { postKakaoLogin } from '../../services/auth/postKakaoLogin';
import { useNavigate } from 'react-router';

const KakaoLoginButton: React.FC = () => {
  const navigate = useNavigate();

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  const code = new URL(window.location.href).searchParams.get('code');

  if (code !== null) {
    postKakaoAuthToken(code).then((res) => {
      postKakaoLogin(res.access_token).then(() => {
        const callbackUrl = sessionStorage.getItem('callbackUrl');
        if (callbackUrl !== null) {
          navigate(callbackUrl);
        } else {
          navigate('/categories');
        }
      });
    });
  }

  return (
    <KakaoBtn onClick={handleLogin}>
      <svg
        width="21"
        height="19"
        viewBox="0 0 21 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.832 15.7301C16.3549 15.7301 20.832 12.2088 20.832 7.86504C20.832 3.5213 16.3549 0 10.832 0C5.30918 0 0.832031 3.5213 0.832031 7.86504C0.832031 10.5455 2.53691 12.9128 5.14033 14.3327L4.33093 18.6716C4.2861 18.9119 4.547 19.0885 4.74635 18.9528L9.46377 15.7416C9.49523 15.7202 9.52036 15.694 9.53936 15.665C9.96253 15.7079 10.394 15.7301 10.832 15.7301Z"
          fill="#181600"
        />
      </svg>
      카카오 로그인
    </KakaoBtn>
  );
};

const KakaoBtn = styled.div`
  position: relative;
  padding: 13px 0;
  width: 100%;
  background-color: #fee500;
  border: none;
  border-radius: 4px;
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Body3};
  svg {
    position: absolute;
    top: 50%;
    left: 5%;
    width: 1.7rem;
    transform: translate(-0, -50%);
  }
`;

export default KakaoLoginButton;
