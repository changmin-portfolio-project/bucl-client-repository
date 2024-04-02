import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { ProductBrandData } from '../../../services/productBrand/getProductInfo';
// import { useRecoilValue } from 'recoil';
// import { productListByCategoriesAtom } from '../../../states/categoryAtom';

interface BrandImgSliderProps {
  productBrandData: ProductBrandData;
}
const BrandImgSlider: React.FC<BrandImgSliderProps> = ({
  productBrandData,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const brandImgList: string[] = productBrandData.brandImgList;

  // const brandProductlist = useRecoilValue(productListByCategoriesAtom).slice(
  //   0,
  //   3,
  // );

  // brandProductlist?.map((v) => brandImgList.push(v.imagePath));

  return (
    <ImgSliderContainer>
      <Slider {...settings}>
        {brandImgList?.map((v, i) => <BrandImage src={v} key={i} />)}
      </Slider>
      <BrandInfoWrap>
        <BrandProfileImg src={productBrandData.brandProfilePath} />
        <BrandInfoTitleDiv>
          <BrandInfoTitleNameDiv>
            {productBrandData.brandName}
          </BrandInfoTitleNameDiv>
          <div>{productBrandData.brandDesc}</div>
        </BrandInfoTitleDiv>
      </BrandInfoWrap>
    </ImgSliderContainer>
  );
};
const ImgSliderContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  position: relative img {
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

const BrandInfoWrap = styled.div`
  display: flex;
  padding: 17px 0 21px 16px;
`;

const BrandImage = styled.img`
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.grey.Grey2};
`;

const BrandProfileImg = styled.img`
  width: 13%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
  border-bottom: 2px;
`;

const BrandInfoTitleDiv = styled.div`
  margin: auto 0;
  padding-left: 11px;
  font: ${({ theme }) => theme.fontSizes.Body1};
`;

const BrandInfoTitleNameDiv = styled.div`
  font: ${({ theme }) => theme.fontSizes.Subhead2};
`;

export default BrandImgSlider;
