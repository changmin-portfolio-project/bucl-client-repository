import React, { ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { MIN_ORD_AMT } from '../../../../const/Payment';
import { cookieNumUtil } from '../../../../utils/UndefinedProcessUtl';
import OutlineButton from '../../../OutlineButton';
import { OrderPaymentType } from '../../../../global/interface/OrderInterface';
import { ORD_PAY_DATA } from '../../../../const/SessionStorageVars';
import { useRecoilState } from 'recoil';
import { rwdUseAmtAtom } from '../../../../states/rewardAtom';
import { ordPayDataAtom } from '../../../../states/orderAtom';

const OrderPoint: React.FC = () => {
  /** 빠꿈 */
  const [ordPayDataState, setOrdPayDataState] = useRecoilState(ordPayDataAtom);
  const [numberInput, setNumberInput] = useRecoilState(rwdUseAmtAtom);

  useEffect(() => {
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    orderPaymentData.rwdUseAmt = 0;
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  }, []);

  useEffect(() => {
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    setNumberInput(orderPaymentData.rwdUseAmt);
  }, [sessionStorage.getItem(ORD_PAY_DATA)]);

  const useTotRwdUseAmt = () => {
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    const rwdCrntAmt = orderPaymentData.rwdCrntAmt;
    const ordTotAmt = orderPaymentData.ordTotAmt;
    const minOrdTotAmt = ordTotAmt - MIN_ORD_AMT;
    if (rwdCrntAmt < minOrdTotAmt) {
      orderPaymentData.rwdUseAmt = rwdCrntAmt;
    } else {
      orderPaymentData.rwdUseAmt = minOrdTotAmt;
    }
    setNumberInput(orderPaymentData.rwdUseAmt);
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) || inputValue === '') {
      const numericValue = parseInt(inputValue, 10);
      const orderPaymentData: OrderPaymentType = JSON.parse(
        sessionStorage.getItem(ORD_PAY_DATA) || '{}',
      );
      const rwdCrntAmt = orderPaymentData.rwdCrntAmt;
      const ordTotAmt = orderPaymentData.ordTotAmt;
      if (inputValue === '') {
        setNumberInput(0);
        orderPaymentData.rwdUseAmt = 0;
        setOrdPayDataState(orderPaymentData);
        sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
      } else if (
        numericValue <= rwdCrntAmt &&
        numericValue <= ordTotAmt - MIN_ORD_AMT
      ) {
        setNumberInput(numericValue);
        orderPaymentData.rwdUseAmt = numericValue;
        setOrdPayDataState(orderPaymentData);
        sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
      }
    }
  };

  const OutlineButtonStyle: React.CSSProperties = {
    flex: '0.2',
    marginLeft: '10px',
    padding: '0 5px',
    width: '90px',
    height: '28px',
  };

  return (
    <StyledOrderPointContainer>
      <PointBody3>포인트 사용</PointBody3>
      <PointInputContainer>
        <PointInputItem>
          <PointUseAmt>포인트</PointUseAmt>
          <PointInputSubItem>
            <PointInput onChange={handleInputChange} value={numberInput} />
            <PointInputUnit>P</PointInputUnit>
          </PointInputSubItem>
        </PointInputItem>
        <OutlineButton
          onClick={useTotRwdUseAmt}
          style={OutlineButtonStyle}
          border="Grey5"
          font="Body1"
          color="black"
        >
          모두 사용
        </OutlineButton>
      </PointInputContainer>
      <PointOwnAmt>
        사용 가능 포인트{' '}
        {cookieNumUtil(ordPayDataState.rwdCrntAmt?.toLocaleString())}P
      </PointOwnAmt>
    </StyledOrderPointContainer>
  );
};

const StyledOrderPointContainer = styled.div`
  padding: 0 0px 20px 0px;
  border-bottom: 1px solid #eaecef;
`;

const PointInputContainer = styled.div`
  display: flex;
  justify-content: left;
  padding: 40px 20px 0 20px;
`;

const PointInputItem = styled.div`
  display: flex;
  flex: 0.8;
  border-bottom: 1px solid #eaecef;
  width: 100%;
  justify-content: space-between;
`;

const PointInputSubItem = styled.div`
  width: 80%;
  text-align: right;
  padding: 5px 0;
`;
const PointInput = styled.input`
  font: ${({ theme }) => theme.fontSizes.Body2};
  border-radius: 4px;
  border: 0px;
  width: 80%;

  flex-shrink: 0;
  padding-left: 13px;
  margin: auto 0px;
  padding: 5px 0px 2px 0px;
  text-align: right;

  &:focus {
    outline: none;
  }
`;

const PointInputUnit = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body2};
  padding-left: 5px;
`;

const PointBody3 = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body3};
  margin: auto;
  margin: 9px 0 8px 0;
  padding: 0 0 8px 20px;
  border-bottom: 1px solid #eaecef;
`;

const PointUseAmt = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body2};
  font-size: 16px;
  margin: auto 0px;
  padding: 5px 0px 2px 0px;
`;

const PointOwnAmt = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body2};
  margin: auto 0px;
  padding: 5px 20px 5px 20px;
  color: var(--grey-5, #acb5bd);
`;

export default OrderPoint;
