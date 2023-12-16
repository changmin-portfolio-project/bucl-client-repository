import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

interface ImgSliderProps {
  imgList?: string[];
}

const ImgSlider: React.FC<ImgSliderProps> = ({ imgList }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <ImgSliderContainer>
      <Slider {...settings}>
        {imgList?.map((v, i) => <img src={v} key={i} />)}
      </Slider>
    </ImgSliderContainer>
  );
};

const ImgSliderContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  img {
    width: 100vw;
    aspect-ratio: 1/1;
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

export default ImgSlider;
