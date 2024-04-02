import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import { saveBeforePos } from '../utils/HomeUtil';
import { TABBAR_NAV_CLASS_NAME } from '../const/AttributeVar';
import {
  CATEGORIES_PATH,
  HOME_PATH,
  MY_PATH,
  REWARD_PRODUCTS_PATH,
  WISHES_PATH,
} from '../const/PathVar';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 500px;
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
  width: 60px;

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
  & > .${TABBAR_NAV_CLASS_NAME} {
    align-items: center;
    display: flex;
    flex-direction: column;

    text-decoration: none;
  }
  .active #rewardIcon {
    path {
      fill: ${({ theme }) => theme.mainColor.Orange5};
    }
  }
`;

const TabBar: React.FC = () => {
  return (
    <Container>
      <StyleTabBarFrame>
        <StyleTab>
          <NavLink
            to={HOME_PATH}
            className={TABBAR_NAV_CLASS_NAME}
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22V12H15V22"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <TabText>홈</TabText>
          </NavLink>
        </StyleTab>
        <StyleTab>
          <NavLink
            to={CATEGORIES_PATH}
            className={TABBAR_NAV_CLASS_NAME}
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12H21"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 18H21"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H3.01"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12H3.01"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H3.01"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <TabText>카테고리</TabText>
          </NavLink>
        </StyleTab>
        <StyleTab>
          <NavLink
            to={REWARD_PRODUCTS_PATH}
            className={TABBAR_NAV_CLASS_NAME}
            activeclassname="active"
            onClick={saveBeforePos}
          >
            <svg
              id="rewardIcon"
              width="20"
              height="20"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M92.2275 31.237C87.91 26.9147 82.4503 24.2796 76.4266 23.6066C75.7631 17.5782 73.1374 12.1185 68.8199 7.79621C63.8057 2.77251 57.1327 0.00473934 50.0332 0H50.0142C42.9242 0 36.2559 2.75829 31.237 7.77251C26.9147 12.09 24.2796 17.5498 23.6066 23.5735C17.5782 24.237 12.1185 26.8626 7.79621 31.1801C2.77252 36.1943 0.00474543 42.8673 6.09724e-06 49.9668C-0.00473324 57.0663 2.75356 63.7393 7.77252 68.763C12.0901 73.09 17.5498 75.7204 23.5735 76.3934C24.237 82.4218 26.8626 87.8815 31.1801 92.2038C36.1943 97.2275 42.8673 99.9953 49.9668 100H49.9858C57.0758 100 63.7441 97.2417 68.763 92.2275C73.0853 87.91 75.7204 82.455 76.3934 76.4265C82.4218 75.763 87.8815 73.1374 92.2038 68.8199C97.2275 63.8057 99.9953 57.1327 100 50.0332C100 42.9336 97.2464 36.2607 92.2275 31.237ZM88.5166 65.1327C85.2085 68.436 81.0474 70.5118 76.455 71.1611C75.9289 64.9336 73.218 59.0853 68.7867 54.6446L68.4502 54.3081L64.763 57.9905L65.0995 58.327C68.5782 61.8104 70.7441 66.3839 71.2322 71.2607C66.3555 70.763 61.7867 68.5924 58.3081 65.109L57.9716 64.7725L54.2844 68.455L54.6209 68.7915C59.0569 73.2322 64.9005 75.9526 71.128 76.4834C70.4739 81.0758 68.3934 85.2322 65.0853 88.5355C61.0521 92.564 55.6919 94.782 49.9905 94.782H49.9763C44.2701 94.782 38.9052 92.5545 34.8768 88.5166C31.5735 85.2085 29.4976 81.0474 28.8483 76.455C35.0758 75.9289 40.9242 73.218 45.3649 68.7867L45.7014 68.4502L42.019 64.763L41.6825 65.0995C38.1991 68.5782 33.6256 70.7441 28.7488 71.2322C29.2464 66.3555 31.4171 61.7867 34.9005 58.3081L35.237 57.9716L31.5545 54.2844L31.218 54.6209C26.7773 59.0521 24.0569 64.9005 23.5261 71.128C18.9337 70.4739 14.7773 68.3934 11.4739 65.0853C7.44077 61.0474 5.22276 55.6825 5.2275 49.9763C5.2275 44.2701 7.45498 38.9052 11.4929 34.8768C14.801 31.5735 18.9621 29.4976 23.5545 28.8483C24.0806 35.0758 26.7915 40.9242 31.2228 45.3649L31.5592 45.7014L35.2465 42.019L34.91 41.6825C31.4313 38.199 29.2654 33.6256 28.7773 28.7488C33.654 29.2464 38.2228 31.4171 41.7014 34.9005L42.0379 35.237L45.7251 31.5545L45.3886 31.218C40.9573 26.7773 35.109 24.0569 28.8815 23.5261C29.5355 18.9336 31.6161 14.7773 34.9242 11.4739C38.9574 7.4455 44.3175 5.22749 50.019 5.22749H50.0332C55.7393 5.22749 61.1043 7.45498 65.1327 11.4929C68.436 14.8009 70.5119 18.9621 71.1611 23.5545C64.9337 24.0806 59.0853 26.7915 54.6446 31.2227L54.3081 31.5592L57.9905 35.2464L58.327 34.91C61.8104 31.4313 66.3839 29.2654 71.2607 28.7773C70.763 33.654 68.5924 38.2227 65.109 41.7014L64.7725 42.0379L68.455 45.7251L68.7915 45.3886C73.2322 40.9573 75.9526 35.1137 76.4834 28.8863C81.0758 29.5403 85.2322 31.6209 88.5355 34.9289C92.5687 38.9668 94.7867 44.3318 94.782 50.0379C94.782 55.7441 92.5498 61.109 88.5119 65.1374L88.5166 65.1327Z"
                fill="#858E96"
              />
            </svg>
            <TabText>리워드</TabText>
          </NavLink>
        </StyleTab>
        <StyleTab>
          <NavLink
            to={WISHES_PATH}
            className={TABBAR_NAV_CLASS_NAME}
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <TabText>좋아요</TabText>
          </NavLink>
        </StyleTab>
        <StyleTab>
          <NavLink
            to={MY_PATH}
            className={TABBAR_NAV_CLASS_NAME}
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="black"
                strokeWidth="1.5"
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
