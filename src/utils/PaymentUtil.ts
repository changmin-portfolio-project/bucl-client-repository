/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { NavigateFunction } from 'react-router';
import { PAY_METHOD } from '../const/Payment';
import { postPaymentVerification } from '../services/payment/postPayment';

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
    window.location.replace('/bad-requests');
    return;
  }

  if (success) {
    try {
      const jsonData: PaymentReqData = {
        ordCode: impUid,
        impUid: impUid,
        amount: spentAmount,
        recipientName: rcpntNom,
        contactNum: cntctNum,
        zipCode: zipCode,
        addr: addr,
        addrDetail: addrDetail,
        isNewAddr: isNewAddr ? 1 : 0,
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
        pgTid: 'mobile-merchant',
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
          navigate(`/order-complete?orderCode=${impUid}`);
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

    navigate('/orders/' + impUid);
  }
}
