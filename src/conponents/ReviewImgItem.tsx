import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

interface ReviewImgItemProps {
  style?: React.CSSProperties;
  dotBoolean?: boolean;
  imgPath?: string | string[];
}

const ReviewImgItem: React.FC<ReviewImgItemProps> = ({
  style,
  dotBoolean,
  imgPath,
}) => {
  const param = useParams();

  return (
    <ReviewImgItemContainer style={style} $widthMode={Array.isArray(imgPath)}>
      {Array.isArray(imgPath) ? (
        imgPath.map((v, i) => <img src={v} key={i} />)
      ) : (
        <ReviewImgComponent src={imgPath} />
      )}
      {dotBoolean && (
        <Link to={`/products/${param.product_code}/photo-reviews`}>
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

const ReviewImgItemContainer = styled.div<{ $widthMode: boolean }>`
  position: relative;
  margin-right: 4px;
  display: ${(props) => (props.$widthMode ? 'flex' : 'block')};

  img {
    margin-right: ${(props) => (props.$widthMode ? '4px' : '0')};
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

const ReviewImgComponent = styled.img`
  vertical-align: bottom;
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
