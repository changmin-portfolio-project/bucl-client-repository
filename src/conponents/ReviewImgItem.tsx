import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ReviewImgItemProps {
  style?: React.CSSProperties;
  dotBoolean?: boolean;
  imgPath?: string;
}

const ReviewImgItem: React.FC<ReviewImgItemProps> = ({
  style,
  dotBoolean,
  imgPath,
}) => {
  return (
    <ReviewImgItemContainer style={style}>
      <img src={imgPath} />
      {dotBoolean && (
        <Link to="/">
          <DotsBox>
            <span></span>
            <span></span>
            <span></span>
          </DotsBox>
        </Link>
      )}
    </ReviewImgItemContainer>
  );
};

const ReviewImgItemContainer = styled.div`
  position: relative;
  margin-right: 4px;
  /* width: 100%; */
  img {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 4px;
  }
  a {
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 4px;
    }
  }
`;
const DotsBox = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  span {
    margin: 0 3px;
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 50%;
  }
`;

export default ReviewImgItem;
