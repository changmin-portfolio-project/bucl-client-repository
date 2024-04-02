import React, { useEffect } from 'react';
import ImgSlider from './body/ImgSlider';
import ProductInfo from './body/ProductInfo';
import DeliveryInfo from './body/DeliveryInfo';
import PurchaseReview from './body/PurchaseReview';
import ProductDetailInfo from './body/ProductDetailInfo';
import ProductInquiry from './body/ProductInquiry';
import { getProductInfo } from '../../services/productDetail/getProductInfo';
import { useParams } from 'react-router-dom';
import BodyLayout from '../layout/BodyLayout';
import { useSetRecoilState } from 'recoil';
import { productDetailAtom } from '../../states/productDetailAtom';
import { OrderPaymentType } from '../../global/interface/OrderInterface';
import { ORD_PAY_DATA } from '../../const/SessionStorageVars';
import { getOrderPaymentDataUtil } from '../../utils/PaymentUtil';

const Body: React.FC = () => {
  /** 바꿈 */
  const param = useParams();

  const setProductDetail = useSetRecoilState(productDetailAtom);
  useEffect(() => {
    if (param.product_code) {
      // 상품 정보 가져오기
      getProductInfo(param.product_code).then((res) => {
        const orderPaymentData: OrderPaymentType = getOrderPaymentDataUtil();
        const data = res.data;
        orderPaymentData.proctCode = data.productCode;
        orderPaymentData.proctNom = data.name;
        orderPaymentData.proctBrn = data.brandName;
        orderPaymentData.cnsmrAmt = data.consumerPrice;
        orderPaymentData.proctImg = data.imagePaths[0];
        orderPaymentData.proctSlPx = data.salePrice;
        sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
        return setProductDetail(data);
      });
    }
  }, []);

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
