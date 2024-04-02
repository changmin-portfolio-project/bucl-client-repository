import React, { useState } from 'react';
import { ORD_PAY_DATA } from '../../../const/SessionStorageVars';
import { OrderPaymentType } from '../../../global/interface/OrderInterface';
import { useSetRecoilState } from 'recoil';
import { ordPayDataAtom } from '../../../states/orderAtom';
import { getOrderPaymentDataUtil } from '../../../utils/PaymentUtil';

import PhoneNumInputTemplate from '../../PhoneNumInputTemplate';

export interface cntctNumForm {
  firstPhoneNum: string;
  middlePhoneNum: string;
  lastPhoneNum: string;
}

const OrdPhoneNumInput: React.FC = () => {
  /** 바꿈 */
  const setOrdPayDataState = useSetRecoilState(ordPayDataAtom);

  const [cntctNum, setCntctNum] = useState<cntctNumForm>({
    firstPhoneNum: '',
    middlePhoneNum: '',
    lastPhoneNum: '',
  });

  const firstPhoneOnChange = (text: string) => {
    if (!isNaN(Number(text))) {
      // 입력값이 숫자라면 상태 업데이트
      setCntctNum((prev) => ({
        ...prev,
        firstPhoneNum: text,
      }));
      const orderPaymentData: OrderPaymentType = getOrderPaymentDataUtil();
      orderPaymentData.cntctNum =
        text + '-' + cntctNum.middlePhoneNum + '-' + cntctNum.lastPhoneNum;
      setOrdPayDataState(orderPaymentData);
      sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
    } else return;
  };
  const middlePhoneNumOnChange = (text: string) => {
    if (!isNaN(Number(text))) {
      // 입력값이 숫자라면 상태 업데이트
      setCntctNum((prev) => ({
        ...prev,
        middlePhoneNum: text,
      }));

      const orderPaymentData: OrderPaymentType = getOrderPaymentDataUtil();
      orderPaymentData.cntctNum =
        cntctNum.firstPhoneNum + '-' + text + '-' + cntctNum.lastPhoneNum;
      setOrdPayDataState(orderPaymentData);
      sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
    } else return;
  };
  const lastPhoneNumOnChange = (text: string) => {
    if (!isNaN(Number(text))) {
      // 입력값이 숫자라면 상태 업데이트
      setCntctNum((prev) => ({
        ...prev,
        lastPhoneNum: text,
      }));
      const orderPaymentData: OrderPaymentType = getOrderPaymentDataUtil();
      orderPaymentData.cntctNum =
        cntctNum.firstPhoneNum + '-' + cntctNum.middlePhoneNum + '-' + text;
      setOrdPayDataState(orderPaymentData);
      sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
    } else return;
  };

  return (
    <PhoneNumInputTemplate
      firstPhoneNum={cntctNum.firstPhoneNum}
      middlePhoneNum={cntctNum.middlePhoneNum}
      lastPhoneNum={cntctNum.lastPhoneNum}
      firstPhoneOnChange={firstPhoneOnChange}
      middlePhoneNumOnChange={middlePhoneNumOnChange}
      lastPhoneNumOnChange={lastPhoneNumOnChange}
    />
  );
};

export default OrdPhoneNumInput;
