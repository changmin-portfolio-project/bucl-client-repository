import React from 'react';
import styled from 'styled-components';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';

interface infoType {
  count?: number;
  style?: React.CSSProperties;
}
const Star: React.FC<infoType> = ({ count, style }) => {
  const StarCount = count && Math.round(count * 2) / 2;
  return (
    <StarClickContainer>
      {[...Array(5)].map((v, index) => (
        <StarBox key={index} style={style}>
          {StarCount === index + 0.5 ? (
            <>
              <HalfStar />
            </>
          ) : StarCount && StarCount >= index + 1 ? (
            <>
              <FillStar />
            </>
          ) : null}
        </StarBox>
      ))}
    </StarClickContainer>
  );
};

const StarClickContainer = styled.div`
  display: flex;
  padding-top: 5px;
  font-size: 1.5rem;
  input {
    display: none;
  }
`;
const StarBox = styled.div`
  position: relative;
  label {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    cursor: pointer;
    &:nth-child(3) {
      right: 0;
      background-color: transparent;
    }
    &:nth-child(2) {
      left: 0;
      background-color: transparent;
    }
  }
`;
// const StarIcon = styled(BsStar)`
//   font-size: 1.5rem;
//   color: ${({ theme }) => theme.colors.yellow};
// `;
const HalfStar = styled(BsStarHalf)`
  color: ${({ theme }) => theme.subColor.Yellow3};
`;
const FillStar = styled(BsStarFill)`
  color: ${({ theme }) => theme.subColor.Yellow3};
`;

export default Star;
