import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { KAKAO_PAY, DANAL_PAY } from '../../../../const/Payment';
import { PG_KAKAOPAY_CODE, PG_DANAL_CODE } from '../../../../const/IamportVars';
import { ORD_PAY_DATA } from '../../../../const/SessionStorageVars';
import { OrderPaymentType } from '../../../../global/interface/OrderInterface';
import { useSetRecoilState } from 'recoil';
import { ordPayDataAtom } from '../../../../states/orderAtom';
import { Link } from 'react-router-dom';
import { PAYMENT_TERMS_LINK } from '../../../../const/LinkVar';
import { getOrderPaymentDataUtil } from '../../../../utils/PaymentUtil';

const OrderPaymentMethod: React.FC = () => {
  /** 바꿈 */

  const setOrdPayDataState = useSetRecoilState(ordPayDataAtom);
  const [kakaoPayState, setKakaoPayState] = useState(false);
  const [cardPayState, setCardPayState] = useState(false);

  useEffect(() => {
    const orderPaymentData: OrderPaymentType = getOrderPaymentDataUtil();
    orderPaymentData.pgCode = '';
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  }, []);

  const handleActive = (paymentId: string) => {
    // 버튼이 클릭될 때마다 isClicked 상태를 토글합니다.
    const orderPaymentData: OrderPaymentType = getOrderPaymentDataUtil();
    if (paymentId === KAKAO_PAY) {
      setKakaoPayState(true);
      setCardPayState(false);
      orderPaymentData.pgCode = PG_KAKAOPAY_CODE;
      setOrdPayDataState(orderPaymentData);
      sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
    } else {
      setKakaoPayState(false);
      setCardPayState(true);
      orderPaymentData.pgCode = PG_DANAL_CODE;
      setOrdPayDataState(orderPaymentData);
      sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
    }
  };
  return (
    <StyledOrdPymtAmtCont>
      <PymtMethodTitle>결제/방법</PymtMethodTitle>
      <PymtMethodCont>
        <PymtMethodWrap onClick={() => handleActive(KAKAO_PAY)}>
          <PayBtn $actived={kakaoPayState} value={KAKAO_PAY}>
            <CheckBox
              type="radio"
              checked={kakaoPayState}
              onChange={() => handleActive(KAKAO_PAY)}
            />
            <PaydBtnWrap>
              <KakaoBtn src="/assets/payment_kakao_logo.png" />
              카카오페이
            </PaydBtnWrap>
          </PayBtn>
        </PymtMethodWrap>
        <PymtMethodWrap onClick={() => handleActive(DANAL_PAY)}>
          <PayBtn $actived={cardPayState} value={DANAL_PAY}>
            <CheckBox
              type="radio"
              checked={cardPayState}
              onChange={() => handleActive(DANAL_PAY)}
            />
            <PaydBtnWrap>신용 카드</PaydBtnWrap>
          </PayBtn>
        </PymtMethodWrap>
      </PymtMethodCont>
      <PymtMethodLabel>
        <PersonalInfoConsentSpan>
          결제를 진행할 경우 개인 정보 제공에 동의하는 것으로 간주됩니다.
        </PersonalInfoConsentSpan>
        <Link to={PAYMENT_TERMS_LINK} target={'_blank'}>
          <PaymentAboutDiv>
            <span>보기</span>
          </PaymentAboutDiv>
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
  background-color: ${({ theme }) => theme.grey.Grey2};
  padding: 7px 20px 5px 20px;
  display: flex;
  justify-content: space-between;
`;

const PaymentAboutDiv = styled.div`
  width: 30px;
  font-weight: 500;
  font-family: Pretendard-Light;
  text-align: center;
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

const PersonalInfoConsentSpan = styled.span`
  font-family: Pretendard-Light;
  font-weight: 400;
`;

export default OrderPaymentMethod;
