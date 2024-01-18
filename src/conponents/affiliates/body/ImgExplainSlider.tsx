import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { salesInfoAtom } from '../../../states/affiliates';
import { useRecoilValue } from 'recoil';

const ImgExplainSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const salesInfo = useRecoilValue(salesInfoAtom);
  return (
    <ImgSliderContainer>
      <Slider {...settings}>
        {salesInfo.imagePath?.map((v, i) => <img src={v} key={i} />)}
      </Slider>
    </ImgSliderContainer>
  );
};

const ImgSliderContainer = styled.div`
  padding: 15px ${({ theme }) => theme.paddings.base};
  width: calc(100% - (${({ theme }) => theme.paddings.base}*2));
  aspect-ratio: 1/1;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
  img {
    width: 100vw;
    aspect-ratio: 1/1;
    border-radius: 8px;
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

export default ImgExplainSlider;
