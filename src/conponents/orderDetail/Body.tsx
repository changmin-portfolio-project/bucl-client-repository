import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProductInfo from './body/ProductInfo';
import ExchangeReturnBtn from './body/ExchangeReturnBtn';
import ChangeAddressBtn from './body/ChangeAddressBtn';
import Recipient from './body/Recipient';
import PaymentInfo from './body/PaymentInfo';
import WithdrawOrder from './body/WithdrawOrder';
import { useParams } from 'react-router-dom';
import { getOrderDetail } from '../../services/orderDetail/getOrderInfo';
import { useRecoilState } from 'recoil';
import { orderInfoAtom } from '../../states/orderDetailAtom';

const Body: React.FC = () => {
  const param = useParams();

  const [orderInfo, setOrderInfo] = useRecoilState(orderInfoAtom);
  useEffect(() => {
    if (param.order_code)
      getOrderDetail(param.order_code).then((res) => {
        setOrderInfo((prev) => ({
          ...prev,
          orderDate: res.orderDate,
          productName: res.productName,
          imagePath: res.imagePath,
          consumerOrder: res.consumerOrder,
          salePrice: res.salePrice,
          productOrderQty: res.productOrderQty,
          recipientName: res.recipientName,
          contactNumber: res.contactNumber,
          zipCode: res.zipCode,
          address: res.address,
          addressDetail: res.addressDetail,
          memoContent: res.memoContent,
          pgProvider: res.pgProvider,
          paymentMethod: res.paymentMethod,
          paymentStatus: res.paymentStatus,
          rewardUseAmount: res.rewardUseAmount,
          shippingFee: res.shippingFee,
          totalOrderAmount: res.totalOrderAmount,
          brandName: res.brandName,
          confirmed: res.confirmed,
        }));
      });
  }, []);
  return (
    <BodyContainer>
      <ProductInfo />
      <BtnBox>
        <ExchangeReturnBtn />
        {!orderInfo.confirmed && <ChangeAddressBtn />}
      </BtnBox>
      <Recipient />
      <PaymentInfo />
      <WithdrawOrder />
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  padding: 57px 0 67px 0;
`;

const BtnBox = styled.div`
  display: flex;
  padding: 0 7% 10px 7%;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

export default Body;
