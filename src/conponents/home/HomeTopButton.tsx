import React from 'react';
import styled from 'styled-components';
import { HOME_INF_POS_NAME } from '../../const/Pagenation';
import {
  SCROLL_FIRST_TOP,
  SCROLL_SMOOTH_BEHAVIOR,
} from '../../const/AttributeVar';

const HomeTopButton: React.FC = () => {
  const topBtnOnClick = () => {
    const homeInfContainer = document.getElementById(HOME_INF_POS_NAME);
    homeInfContainer?.scrollTo({
      top: SCROLL_FIRST_TOP,
      behavior: SCROLL_SMOOTH_BEHAVIOR,
    });
  };

  return (
    <TopBtnContainer onClick={() => topBtnOnClick()}>
      <TopBtnWrap>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.832 15L12.832 9L6.83203 15"
            stroke="#858E96"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <TopBtnText>맨위로</TopBtnText>
      </TopBtnWrap>
    </TopBtnContainer>
  );
};

const TopBtnContainer = styled.button`
  position: fixed;
  bottom: 90px;
  right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  aspect-ratio: 1/1;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 50%;
  color: ${({ theme }) => theme.grey.Grey6};
  cursor: pointer;
  svg {
    margin-top: -1px;
  }
  margin: 10px;
`;

const TopBtnWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -60%);
`;

const TopBtnText = styled.p`
  margin-top: -7px;
  font: ${({ theme }) => theme.fontSizes.Body1};
`;

export default HomeTopButton;
