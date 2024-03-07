import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { KAKAO_PAY, NHN_KCP } from '../../../../const/Payment';
import { PG_KAKAOPAY_CODE, PG_KCP_CODE } from '../../../../const/IamportVars';
import { ORD_PAY_DATA } from '../../../../const/SessionStorageVars';
import { OrderPaymentType } from '../../../../global/interface/OrderInterface';
import { useSetRecoilState } from 'recoil';
import { ordPayDataAtom } from '../../../../states/orderAtom';
import { Link } from 'react-router-dom';
import { PAYMENT_TERMS_LINK } from '../../../../const/LinkVar';

const OrderPaymentMethod: React.FC = () => {
  /** 바꿈 */

  const setOrdPayDataState = useSetRecoilState(ordPayDataAtom);
  const [kakaoPayState, setKakaoPayState] = useState(false);
  const [cardPayState, setCardPayState] = useState(false);

  useEffect(() => {
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    orderPaymentData.pgCode = '';
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  }, []);

  const handleActive = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    // 버튼이 클릭될 때마다 isClicked 상태를 토글합니다.
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    if (target.id === KAKAO_PAY) {
      setKakaoPayState(true);
      setCardPayState(false);
      orderPaymentData.pgCode = PG_KAKAOPAY_CODE;
      setOrdPayDataState(orderPaymentData);
      sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
    } else {
      setKakaoPayState(false);
      setCardPayState(true);
      orderPaymentData.pgCode = PG_KCP_CODE;
      setOrdPayDataState(orderPaymentData);
      sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
    }
  };
  return (
    <StyledOrdPymtAmtCont>
      <PymtMethodTitle>결제/방법</PymtMethodTitle>
      <PymtMethodCont>
        <PymtMethodWrap>
          <PayBtn $actived={kakaoPayState} value={KAKAO_PAY}>
            <CheckBox
              id={KAKAO_PAY}
              type="radio"
              checked={kakaoPayState}
              onChange={handleActive}
            />
            <PaydBtnWrap>
              <KakaoBtn src="/assets/payment_kakao_logo.png" />
              카카오페이
            </PaydBtnWrap>
          </PayBtn>
        </PymtMethodWrap>
        <PymtMethodWrap>
          <PayBtn $actived={cardPayState} value={NHN_KCP}>
            <CheckBox
              id={NHN_KCP}
              type="radio"
              checked={cardPayState}
              onChange={handleActive}
            />
            <PaydBtnWrap>신용 카드</PaydBtnWrap>
          </PayBtn>
        </PymtMethodWrap>
      </PymtMethodCont>
      <PymtMethodLabel>
        결제를 진행할 경우 개인 정보 제공에 동의하는 것으로 간주됩니다.
        <Link to={PAYMENT_TERMS_LINK}>
          <PaymentAboutDiv>보기</PaymentAboutDiv>
        </Link>
      </PymtMethodLabel>
    </StyledOrdPymtAmtCont>
  );
};

const StyledOrdPymtAmtCont = styled.div``;

const PymtMethodCont = styled.div`
  padding-bottom: 5px;
  padding: 0 20px 20px 20px;
`;

const PymtMethodWrap = styled.div`
  padding-bottom: 20px;
`;

const PaydBtnWrap = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body3};
  color: black;
`;

const KakaoBtn = styled.img`
  width: 50px;
  vertical-align: sub;
  padding-right: 5px;
`;

const PymtMethodTitle = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body3};
  padding: 9px 20px 16px 20px;
`;

const PymtMethodLabel = styled.div`
  font: ${({ theme }) => theme.fontSizes.Label};
  background: var(--grey-1, #f1f3f5);
  padding: 7px 20px 5px 20px;
  display: flex;
  justify-content: space-between;
`;

const PaymentAboutDiv = styled.div`
  font-weight: 700;
`;

const PayBtn = styled.button<{ $actived: boolean }>`
  font: ${({ theme }) => theme.fontSizes.Body1};
  border: 0px solid;
  background: #fff;
  flex-shrink: 0;

  // color: ${(props) => (props.$actived ? '#fff' : props.theme.grey.grey5)};
`;

const CheckBox = styled.input`
  margin: 0 5px 0 0;
  accent-color: #ff5f00;
  width: 20px;
  height: 20px;
  vertical-align: sub;
`;

export default OrderPaymentMethod;

// background-color: ${(props) =>
//   props.isActive ? props.theme.mainColor.Orange5 : props.theme.grey.grey5};
