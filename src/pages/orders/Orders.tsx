import React, { useEffect } from 'react';
import styled from 'styled-components';
import OrdBody from '../../conponents/order/Body';
import OrdAddrBody from '../../conponents/orderAddressSelect/Body';
import HeaderLayout from '../../conponents/layout/HeaderLayout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isAdressSelectPageAtom, ordPayDataAtom } from '../../states/orderAtom';
import { getReward } from '../../services/reward/getReward';
import { getAddressDefault } from '../../services/address/getAddressDefault';
import { cookieNumUtil } from '../../utils/UndefinedProcessUtl';
import { OrderPaymentType } from '../../global/interface/OrderInterface';
import {
  FALSE_STRING,
  ORD_PAY_DATA,
  TRUE_STRING,
} from '../../const/SessionStorageVars';

const OrdersPage: React.FC = () => {
  /** 바꿈 */
  const setOrdPayDataSate = useSetRecoilState(ordPayDataAtom);
  const [isAddressSelectPage, setIsAddressSelectPage] = useRecoilState(
    isAdressSelectPageAtom,
  );

  useEffect(() => {
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    getReward()
      .then((res) => {
        if (res === undefined) {
          orderPaymentData.rwdCrntAmt = 0;
        } else {
          orderPaymentData.rwdCrntAmt = cookieNumUtil(res) as number;
        }

        setOrdPayDataSate({ ...orderPaymentData });
        sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
      })
      .catch(() => {});

    getAddressDefault()
      .then((res) => {
        orderPaymentData.shippingAddressName = res.shippingAddressName;
        orderPaymentData.rcpntNom = res.recipientName;
        orderPaymentData.cntctNum = res.contactNumber;
        orderPaymentData.addr = res.address;
        orderPaymentData.addrDetail = res.addressDetail;
        orderPaymentData.zipCode = res.zipCode;
        orderPaymentData.isNewAddr = FALSE_STRING;
        orderPaymentData.memoCnt = '';

        setOrdPayDataSate({ ...orderPaymentData });
        sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
      })
      .catch(() => {
        orderPaymentData.isNewAddr = TRUE_STRING;
        setOrdPayDataSate({ ...orderPaymentData });
        sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
      });

    window.scrollTo({ top: 0 });
    setIsAddressSelectPage(false);
  }, []);
  return (
    <Container>
      <>
        {isAddressSelectPage === true ? (
          <>
            <HeaderLayout
              text="배송지 관리"
              setFunction={setIsAddressSelectPage}
            />
            <OrdAddrBody />
          </>
        ) : (
          <>
            <HeaderLayout text="주문 / 결제" />
            <OrdBody />
          </>
        )}
      </>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default OrdersPage;
