import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PrevBtn: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  return (
    <PrevBtnContainer onClick={() => goBack()}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => goBack}
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </PrevBtnContainer>
  );
};

const PrevBtnContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 8%;
  transform: translate(-50%, 0%);
  display: flex;
  cursor: pointer;
`;

export default PrevBtn;
