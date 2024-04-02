/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { NavigateFunction } from 'react-router';
import {
  IS_NEW_ADDR_FALSE_NUMBER,
  IS_NEW_ADDR_TRUE_NUMBER,
  MERCHANT_UID_NAME,
  MOBILE_PG_TID_NAME,
  PAY_METHOD,
} from '../const/Payment';
import { postPaymentVerification } from '../services/payment/postPayment';
import { OrderPaymentType } from '../global/interface/OrderInterface';
import { FALSE_STRING, ORD_PAY_DATA } from '../const/SessionStorageVars';
import { ORDER_OBJECT_RESET } from '../const/OrderVars';
import { BAD_REQUEST_PATH, ORDER_COMPLETE_PATH } from '../const/PathVar';
import { v4 as uuid } from 'uuid';

type ProductOption = {
  [key: string]: number | string;
};

interface PaymentReqData {
  [key: string]: number | string | boolean | ProductOption;
}

export async function paymentVerifyUtil(
  navigate: NavigateFunction,
  // portone 결제 처리 정보
  impUid: string | null,
  success: boolean,
  errorMsg: string,
  pgTid: string,
  merchantUid: string,

  // 결제 정보
  spentAmount: number,
  totalAmount: number,
  rwdUseAmt: number,
  pgCode: string,
  shpFee: number,

  // 상품 정보
  proctCode: number,
  proctNom: string,
  proctBrn: string,

  // 상품 옵션 정보
  skuCode: number,
  proctOptAmt: number,
  proctOptQty: number,
  proctOptNom: string,

  // 배송지 정보
  rcpntNom: string,
  cntctNum: string,
  addr: string,
  addrDetail: string,
  zipCode: string,
  memoCnt: string,
  isNewAddr: boolean,
  shippingAddressName: string,
) {
  if (impUid === null || pgTid === null) {
    window.location.replace(BAD_REQUEST_PATH);
    return;
  }

  if (success) {
    try {
      const jsonData: PaymentReqData = {
        ordCode: impUid,
        impUid: impUid,
        merchantUid: merchantUid,
        amount: spentAmount,
        recipientName: rcpntNom,
        contactNum: cntctNum,
        zipCode: zipCode,
        addr: addr,
        addrDetail: addrDetail,
        isNewAddr: isNewAddr
          ? IS_NEW_ADDR_TRUE_NUMBER
          : IS_NEW_ADDR_FALSE_NUMBER,
        shippingAddressName: shippingAddressName,
        memoCnt: memoCnt,
        productCode: proctCode,
        productName: proctNom,
        brandName: proctBrn,

        productOption: {
          skuCode: skuCode,
          productOrderAmt: proctOptAmt,
          productOrderQty: proctOptQty,
          productOptVal: proctOptNom,
        },
        rewardAmt: rwdUseAmt,
        shpFee: shpFee,
        totalOrdAmt: totalAmount,
        pgProvider: pgCode,
        payMethod: PAY_METHOD,
        pgTid: pgTid,
      };

      const formData = new FormData();
      for (const [key, value] of Object.entries(jsonData)) {
        if (typeof value === 'object') {
          for (const [subKey, subValue] of Object.entries(jsonData[key])) {
            formData.append(key + '.' + subKey, subValue);
          }
        } else {
          if (typeof value === 'number') {
            formData.append(key, value.toString());
          } else if (typeof value === 'string') {
            formData.append(key, value);
          }
        }
      }

      await postPaymentVerification(formData)
        .then(() => {
          navigate(`${ORDER_COMPLETE_PATH}?orderCode=${impUid}`);
        })
        .catch((err) => {
          alert(err.response.data.message);
          navigate(-1);
        });
    } catch (error) {
      console.error('Error while verifying payment:', error);
      alert('오류가 발생하여 결제가 취소되었습니다.');
      navigate(-1);
    }
  } else {
    console.error('Error msg:', errorMsg);

    if (errorMsg.length > 3) alert(errorMsg);

    navigate(-1);
  }
}

export const getOrderPaymentDataUtil = (): OrderPaymentType => {
  const orderPaymentData: OrderPaymentType = JSON.parse(
    sessionStorage.getItem(ORD_PAY_DATA) || ORDER_OBJECT_RESET,
  );
  return orderPaymentData;
};

export const resetOrderPaymentDataUtil = (): void => {
  const orderPaymentData: OrderPaymentType = JSON.parse(
    sessionStorage.getItem(ORD_PAY_DATA) || ORDER_OBJECT_RESET,
  );
  orderPaymentData.rwdUseAmt = 0;
  orderPaymentData.rwdCrntAmt = 0;
  orderPaymentData.pgCode = '';
  orderPaymentData.memoCnt = '';
  orderPaymentData.addrDetail = '';

  orderPaymentData.isNewAddr = FALSE_STRING;

  orderPaymentData.proctImg = '';
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

  orderPaymentData.cnsmrAmt = 0;
  orderPaymentData.ordTotAmt = 0;
  orderPaymentData.proctSlPx = 0;
  orderPaymentData.totProcAmt = 0;

  sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
};

export const genMerchantUid = (): string => {
  return `${MERCHANT_UID_NAME}${uuid()}`;
};

export const getMobilePgTid = (): string => {
  return `${MOBILE_PG_TID_NAME}${uuid()}`;
};
