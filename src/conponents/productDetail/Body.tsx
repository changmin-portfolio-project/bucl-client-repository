import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './body/ImgSlider';
import ProductInfo from './body/ProductInfo';
import DeliveryInfo from './body/DeliveryInfo';
import PurchaseReview from './body/PurchaseReview';
import ProductDetailInfo from './body/ProductDetailInfo';
import ProductInquiry from './body/ProductInquiry';
import { getProductInfo } from '../../services/productDetail/getProductInfo';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {
  CNSMR_AMT,
  PROCT_BRN,
  PROCT_CODE,
  PROCT_IMG,
  PROCT_NOM,
  PROCT_SL_PX,
} from '../../const/CookieVars';
import { useRecoilState } from 'recoil';
import { productInfoAtom } from '../../states/productAtom';

const Body: React.FC = () => {
  const param = useParams();

  const [data, setData] = useRecoilState(productInfoAtom);
  const [, setCookie] = useCookies();
  useEffect(() => {
    if (param.product_code) {
      // 상품 정보 가져오기
      getProductInfo(param.product_code).then((res) => {
        const data = res.data;
        setCookie(PROCT_CODE, data.productCode);
        setCookie(PROCT_NOM, data.name);
        setCookie(PROCT_BRN, data.brandName);
        setCookie(CNSMR_AMT, data.consumerPrice);
        setCookie(PROCT_IMG, data.imagePaths[0]);
        setCookie(PROCT_SL_PX, data.salePrice);
        return setData(data);
      });
    }
  }, []);

  console.log(data);
  return (
    <BodyContainer>
      <ImgSlider imgList={data?.imagePaths} />
      <ProductInfo
        name={data?.name}
        brandName={data?.brandName}
        salePrice={data?.salePrice}
        consumerPrice={data?.consumerPrice}
        discountRate={data?.discountRate}
        ordNum={data?.ordNum}
      />
      <DeliveryInfo />
      <PurchaseReview
        reviewList={data?.reviewPreviews}
        averageRating={data?.averageRating}
        totalReviewCount={data?.totalReviewCount}
      />
      <ProductDetailInfo imgList={data?.detailImagePaths} />
      <ProductInquiry />
    </BodyContainer>
  );
};

const BodyContainer = styled.section`
  padding-top: 73px;
  padding-bottom: 100px;
`;

export default Body;
