import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './css/TabBar.css';
import React from 'react';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 600px;
  width: 100%;
  margin: 0px auto;
`;

const StyleTabBarFrame = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyleTab = styled.div``;

const TabBar: React.FC = () => {
  return (
    <Container>
      <StyleTabBarFrame>
        <StyleTab>
          <Link to="/" className="tab-bar-href">
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 32 32"
              color="#242729"
              className="css-1ha6pr5 e170kbym0"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M9 5h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Zm3.5 7h4.382l-5 10H19.5v-2h-4.382l5-10H12.5v2Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>홈</div>
          </Link>
        </StyleTab>
        <StyleTab>
          <Link to="/categories" className="tab-bar-href">
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 32 32"
              color="#A1A9AD"
              className="css-3asouo e170kbym0"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M7 9h18M7 16h18M7 23h18"
              ></path>
            </svg>
            <div>카테고리</div>
          </Link>
        </StyleTab>
        <StyleTab>
          <Link to="/wishes" className="tab-bar-href">
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 32 32"
              color="#A1A9AD"
              className="css-3asouo e170kbym0"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M16 6.75A3.75 3.75 0 1 0 16 14.25 3.75 3.75 0 1 0 16 6.75z"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="square"
                strokeWidth="1.5"
                d="m24.983 25.25-2.32-7.5H9.462l-2.43 7.5h17.95Z"
              ></path>
            </svg>
            <div>찜</div>
          </Link>
        </StyleTab>
        <StyleTab>
          <Link to="/my" className="tab-bar-href">
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 32 32"
              color="#A1A9AD"
              className="css-3asouo e170kbym0"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M16 6.75A3.75 3.75 0 1 0 16 14.25 3.75 3.75 0 1 0 16 6.75z"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="square"
                strokeWidth="1.5"
                d="m24.983 25.25-2.32-7.5H9.462l-2.43 7.5h17.95Z"
              ></path>
            </svg>
            <div>마이페이지</div>
          </Link>
        </StyleTab>
      </StyleTabBarFrame>
    </Container>
  );
};

export default TabBar;
