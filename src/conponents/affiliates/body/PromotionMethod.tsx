import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ImgExplainSlider from './ImgExplainSlider';

const PromotionMethod: React.FC = () => {
  const [toggleAccordion, setToggleAccordion] = useState(false);
  return (
    <PromotionMethodContainer>
      <PromotionMethodAccordion
        $active={toggleAccordion}
        onClick={() => setToggleAccordion(!toggleAccordion)}
      >
        <span>홍보 방법</span>
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.832031 13L6.83203 7L0.832031 1"
            stroke="#CED4DA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </PromotionMethodAccordion>
      {toggleAccordion && <ImgExplainSlider />}
    </PromotionMethodContainer>
  );
};

const PromotionMethodContainer = styled.section``;

const PromotionMethodAccordion = styled.div<{ $active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px ${({ theme }) => theme.paddings.base};
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
  font: ${({ theme }) => theme.fontSizes.Body3};
  ${(props) =>
    props.$active
      ? css`
          svg {
            transform: rotate(-90deg) translateY(50%);
          }
        `
      : css`
          svg {
            transform: rotate(90deg) translateY(50%);
          }
        `}
`;

export default PromotionMethod;
