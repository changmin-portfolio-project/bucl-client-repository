import React from 'react';
import styled from 'styled-components';

const TopBtn: React.FC = () => {
  const topBtnOnClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <TopBtnContainer onClick={() => topBtnOnClick()}>
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
    </TopBtnContainer>
  );
};

const TopBtnContainer = styled.button`
  position: fixed;
  bottom: 90px;
  right: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 50%;
  color: ${({ theme }) => theme.grey.Grey6};
  cursor: pointer;
  svg {
    margin-top: 5px;
  }
  margin: 10px;
`;

const TopBtnText = styled.span`
  margin-top: -5px;
  font: ${({ theme }) => theme.fontSizes.Body1};
`;

export default TopBtn;
