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
import { ORDERED, checkNotOrderStatus } from '../../const/OrderVars';
import TrackingNumBtn from './body/TrackingNumBtn';
import ConfirmPopup from '../ConfirmPopup';
import { confirmPopupAtom } from '../../states/functionAtom';
import { postOrderCancel } from '../../services/orderDetail/postOrderCancel';
import { resetOrderPaymentDataUtil } from '../../utils/PaymentUtil';

const Body: React.FC = () => {
  /** 바꿈 */

  const param = useParams();
  const [confirmPopup] = useRecoilState(confirmPopupAtom);

  const [orderInfo, setOrderInfo] = useRecoilState(orderInfoAtom);
  useEffect(() => {
    resetOrderPaymentDataUtil();
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
            {orderInfo.trackingNum !== null ? (
              <TrackingNumBtn trackingNum={orderInfo.trackingNum} />
            ) : (
              <>
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
      !(orderInfo.orderDto.orderStatus === ORDERED) ? (
        !checkNotOrderStatus(orderInfo.orderDto.orderStatus) && (
          <ExchangeReturnBtn />
        )
      ) : (
        <WithdrawOrderWrap>
          <WithdrawOrder />
        </WithdrawOrderWrap>
      )}
      {confirmPopup && (
        <ConfirmPopup
          message={[
            '해당 주문을 취소하시겠습니까?',
            '해당 주문이 취소 되었습니다.\n환불 금액은 2~3일 내에 들어올 예정입니다.',
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

const WithdrawOrderWrap = styled.div`
  display: flex;
  padding: 10px 7% 30px 7%;
`;

export default Body;
