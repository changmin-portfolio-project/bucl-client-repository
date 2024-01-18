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
import BodyLayout from '../layout/BodyLayout';
import { useSetRecoilState } from 'recoil';
import { productDetailAtom } from '../../states/productDetailAtom';

const Body: React.FC = () => {
  const param = useParams();

  const setProductDetail = useSetRecoilState(productDetailAtom);
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
        return setProductDetail(data);
      });
    }
  }, []);

  console.log(data);
  return (
    <BodyLayout>
      <ImgSlider />
      <ProductInfo />
      <DeliveryInfo />
      <PurchaseReview />
      <ProductDetailInfo />
      <ProductInquiry />
    </BodyLayout>
  );
};

export default Body;
