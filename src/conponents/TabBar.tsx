import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './css/TabBar.css';
import React from 'react';
import { saveBeforePos } from '../utils/HomeUtil';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 600px;
  width: 100%;
  margin: 0px auto;
  padding: 10px 0 3vh 0;
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

const StyleTabBarFrame = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TabText = styled.span`
  padding-top: 5px;
  font: ${({ theme }) => theme.fontSizes.Body1};
  color: ${({ theme }) => theme.grey.Grey6};
`;

const StyleTab = styled.div`
  svg {
    path {
      stroke: ${({ theme }) => theme.grey.Grey6};
    }
  }
  .active {
    color: ${({ theme }) => theme.mainColor.Orange5};
    svg {
      path {
        stroke: ${({ theme }) => theme.mainColor.Orange5};
      }
    }
  }
  .active span {
    color: ${({ theme }) => theme.mainColor.Orange5};
  }
`;

const TabBar: React.FC = () => {
  return (
    <Container>
      <StyleTabBarFrame>
        <StyleTab>
          <NavLink
            to="/"
            className="tab-bar-href"
            activeclassname="active"
            onClick={saveBeforePos}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22V12H15V22"
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <TabText>홈</TabText>
          </NavLink>
        </StyleTab>
        <StyleTab>
          <NavLink
            to="/categories"
            className="tab-bar-href"
            activeclassname="active"
            onClick={saveBeforePos}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 6H21"
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12H21"
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 18H21"
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H3.01"
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12H3.01"
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H3.01"
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <TabText>카테고리</TabText>
          </NavLink>
        </StyleTab>
        <StyleTab>
          <NavLink
            to="/wishes"
            className="tab-bar-href"
            activeclassname="active"
            onClick={saveBeforePos}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <TabText>찜</TabText>
          </NavLink>
        </StyleTab>
        <StyleTab>
          <NavLink
            to="/my"
            className="tab-bar-href"
            activeclassname="active"
            onClick={saveBeforePos}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="black"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <TabText>마이페이지</TabText>
          </NavLink>
        </StyleTab>
      </StyleTabBarFrame>
    </Container>
  );
};

export default TabBar;
