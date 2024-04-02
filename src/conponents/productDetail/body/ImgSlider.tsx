import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { productDetailAtom } from '../../../states/productDetailAtom';

const ImgSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const productDetail = useRecoilValue(productDetailAtom);

  return (
    <ImgSliderContainer>
      <Slider {...settings}>
        {productDetail.imagePaths?.map((v, i) => <img src={v} key={i} />)}
      </Slider>
      {productDetail.prodObsNum !== 0 && (
        <TodayObsUserNumDiv>
          오늘{' '}
          <TodayObsUserNumSpan>{productDetail.prodObsNum}</TodayObsUserNumSpan>
          명이 해당 상품을 보았습니다.
        </TodayObsUserNumDiv>
      )}
    </ImgSliderContainer>
  );
};

const ImgSliderContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  img {
    width: 100vw;
    aspect-ratio: 1/1;
    vertical-align: bottom;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: white;
  }
  .slick-dots li button:before {
    opacity: 30%;
    color: white;
  }
  .slick-dots {
    bottom: 10px;
    li {
      width: 15px;
    }
  }
  button:before {
    width: 10px;
    height: 10px;
  }
`;

const TodayObsUserNumDiv = styled.div`
  background-color: black;
  color: white;
  font-family: 'Pretendard-Light';
  padding: 6px 0;
  font-size: 14px;
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Body1};
`;

const TodayObsUserNumSpan = styled.span`
  font-weight: 600;
`;

export default ImgSlider;
