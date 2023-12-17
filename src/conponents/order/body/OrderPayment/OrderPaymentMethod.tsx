import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CARD_PAY, KAKAO_PAY } from '../../../../const/Payment';
import { useSetRecoilState } from 'recoil';
import { pgCodeAtom } from '../../../../states/paymentAtom';
import { PG_KAKAOPAY_CODE } from '../../../../const/IamportVars';

const OrderPaymentMethod: React.FC = () => {
  const [kakaoPayState, setKakaoPayState] = useState(false);
  const [cardPayState, setCardPayState] = useState(false);
  const setPgCodeAtom = useSetRecoilState(pgCodeAtom);

  useEffect(() => {
    setPgCodeAtom('');
  }, []);

  const handleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 버튼이 클릭될 때마다 isClicked 상태를 토글합니다.
    if (e.currentTarget.value === CARD_PAY) {
      setKakaoPayState(false);
      setCardPayState(true);
      setPgCodeAtom(PG_KAKAOPAY_CODE);
    } else {
      setKakaoPayState(true);
      setCardPayState(false);
      setPgCodeAtom(PG_KAKAOPAY_CODE);
    }
  };
  return (
    <StyledOrdPymtAmtCont>
      <PymtMethodTitle>결제/방법</PymtMethodTitle>
      <PymtMethodCont>
        <PayBtn
          isActive={kakaoPayState}
          onClick={handleActive}
          value={KAKAO_PAY}
        >
          카카오페이
        </PayBtn>
        <Margin10></Margin10>
        <PayBtn isActive={cardPayState} onClick={handleActive} value={CARD_PAY}>
          신용 카드
        </PayBtn>
      </PymtMethodCont>
      <PymtMethodLabel>
        결제를 진행할 경우 개인 정보 제공에 동의하는 것으로 간주됩니다.
      </PymtMethodLabel>
    </StyledOrdPymtAmtCont>
  );
};

const StyledOrdPymtAmtCont = styled.div``;

const PymtMethodCont = styled.div`
  color: var(--grey-5, #acb5bd);
  display: flex;
  justify-content: left;
  padding-bottom: 5px;
  padding: 0 20px 20px 20px;
`;

const PymtMethodTitle = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body3};
  padding: 9px 20px 8px 20px;
`;

const PymtMethodLabel = styled.div`
  font: ${({ theme }) => theme.fontSizes.Label};
  background: var(--grey-1, #f1f3f5);
  padding: 7px 0 5px 20px;
`;

const PayBtn = styled.button<{ isActive: boolean }>`
  font: ${({ theme }) => theme.fontSizes.Body1};
  border-radius: 4px;
  border: 1px solid var(--grey-5, #acb5bd);
  background: #fff;
  width: 68px;
  height: 33px;
  flex-shrink: 0;
  color: var(--black, #000);

  background-color: ${(props) =>
    props.isActive ? props.theme.mainColor.Orange5 : props.theme.grey.grey5};
  color: ${(props) => (props.isActive ? '#fff' : props.theme.grey.grey5)};
`;

const Margin10 = styled.div`
  margin-left: 10px;
`;

export default OrderPaymentMethod;
