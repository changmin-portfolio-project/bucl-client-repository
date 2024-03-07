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
import {
  ORDERED,
  ORDERED_IN_DELIVERY,
  checkNotOrderStatus,
} from '../../const/OrderVars';
import TrackingNumBtn from './body/TrackingNumBtn';
import ConfirmPopup from '../ConfirmPopup';
import { confirmPopupAtom } from '../../states/functionAtom';
import { postOrderCancel } from '../../services/orderDetail/postOrderCancel';
import { OrderPaymentType } from '../../global/interface/OrderInterface';
import { FALSE_STRING, ORD_PAY_DATA } from '../../const/SessionStorageVars';

const Body: React.FC = () => {
  /** 바꿈 */

  const param = useParams();
  const [confirmPopup] = useRecoilState(confirmPopupAtom);

  const [orderInfo, setOrderInfo] = useRecoilState(orderInfoAtom);
  useEffect(() => {
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    orderPaymentData.rwdUseAmt = 0;
    orderPaymentData.pgCode = '';
    orderPaymentData.memoCnt = '';
    orderPaymentData.addrDetail = '';

    orderPaymentData.isNewAddr = FALSE_STRING;

    orderPaymentData.proctCode = 0;
    orderPaymentData.proctNom = '';
    orderPaymentData.proctBrn = '';
    orderPaymentData.skuCode = 0;
    orderPaymentData.proctOptAmt = 0;
    orderPaymentData.proctOptQty = 0;
    orderPaymentData.proctOptNom = '';
    orderPaymentData.rcpntNom = '';
    orderPaymentData.cntctNum = '';
    orderPaymentData.addr = '';
    orderPaymentData.zipCode = '';
    orderPaymentData.shippingAddressName = '';
    orderPaymentData.shpFee = 0;

    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
    if (param.order_code)
      getOrderDetail(param.order_code).then((res) => {
        setOrderInfo((prev) => ({
          ...prev,
          orderDto: res.orderDto,
          shpAddrDto: res.shpAddrDto,
          shippingFee: res.shippingFee,
          trackingNum: res.trackingNum,
          paymentMethod: res.paymentMethod,
        }));
      });
  }, []);

  const orderCancelBtnOnClick = () => {
    if (param.order_code)
      postOrderCancel(param.order_code)
        .then(() => {})
        .catch(() => {
          alert('오류로 인해 주문 취소 요청이 취소되었습니다.');
        });
  };
  return (
    <BodyContainer>
      <ProductInfo />
      <BtnBox>
        {!checkNotOrderStatus(orderInfo.orderDto.orderStatus) && (
          <>
            {orderInfo.orderDto.orderStatus === ORDERED_IN_DELIVERY &&
            orderInfo.trackingNum !== null ? (
              <TrackingNumBtn trackingNum={orderInfo.trackingNum} />
            ) : (
              <>
                <WithdrawOrder />
                {orderInfo.orderDto.orderStatus === ORDERED && (
                  <ChangeAddressBtn />
                )}
              </>
            )}
          </>
        )}
      </BtnBox>
      <Recipient />
      <PaymentInfo />
      {!orderInfo.orderDto.confirmed &&
        !(orderInfo.orderDto.orderStatus === ORDERED) &&
        !checkNotOrderStatus(orderInfo.orderDto.orderStatus) && (
          <ExchangeReturnBtn />
        )}
      {confirmPopup && (
        <ConfirmPopup
          message={[
            '해당 주문을 취소하시겠습니까?',
            '해당 주문이 취소 되었습니다.',
          ]}
          confirmFunc={orderCancelBtnOnClick}
        />
      )}
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  padding: 57px 0 100px 0;
`;

const BtnBox = styled.div`
  display: flex;
  padding: 0 7% 10px 7%;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

export default Body;
