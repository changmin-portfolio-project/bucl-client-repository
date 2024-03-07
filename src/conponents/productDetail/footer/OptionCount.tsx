import React, { SetStateAction } from 'react';
import styled from 'styled-components';

import ColoredButton from '../../ColoredButton';
import { isActivePopUp } from '../../../utils/PopUpUtil';
import { OrderPaymentType } from '../../../global/interface/OrderInterface';
import { ORD_PAY_DATA } from '../../../const/SessionStorageVars';
import { Link } from 'react-router-dom';

interface OptionCountProps {
  currentOption: string;
  setCurrentOption: React.Dispatch<SetStateAction<string>>;
  currentOptionExtraAmt: number;
  setCurrentOptionExtraAmt: React.Dispatch<SetStateAction<number>>;
  optionCount: number;
  setOptionCount: React.Dispatch<SetStateAction<number>>;
  crntOptSkuCode: number;
}

const OptionCount: React.FC<OptionCountProps> = ({
  currentOption,
  setCurrentOption,
  currentOptionExtraAmt,
  setCurrentOptionExtraAmt,
  optionCount,
  setOptionCount,
  crntOptSkuCode,
}) => {
  /** 바꿈 */
  const deleteBtnOnClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 전파 중지
    setCurrentOption('');
    setCurrentOptionExtraAmt(0);
  };
  const minusBtnOnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (optionCount > 0) setOptionCount(optionCount - 1);
  };
  const plusBtnOnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOptionCount(optionCount + 1);
  };

  const setPaymentConfig = () => {
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );

    orderPaymentData.proctOptNom = currentOption;
    orderPaymentData.proctOptAmt =
      orderPaymentData.proctSlPx + currentOptionExtraAmt;

    orderPaymentData.proctOptQty = optionCount;

    orderPaymentData.skuCode = crntOptSkuCode;

    orderPaymentData.ordTotAmt =
      (orderPaymentData.proctSlPx + currentOptionExtraAmt) * optionCount;

    orderPaymentData.totProcAmt =
      (orderPaymentData.cnsmrAmt + currentOptionExtraAmt) * optionCount;

    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));

    isActivePopUp(true);
  };

  const orderPaymentData: OrderPaymentType = JSON.parse(
    sessionStorage.getItem(ORD_PAY_DATA) || '{}',
  );

  return (
    <OptionCountContainer>
      <OptionBox>
        <OptionItem>
          <TitleDeleteBox>
            <span>{currentOption}</span>
            <XButtonBtn onClick={(e) => deleteBtnOnClick(e)}>
              <XButtonImg src="/assets/XButton.svg" />
            </XButtonBtn>
          </TitleDeleteBox>
          <CountPriceBox>
            <CountBox>
              <MinusBtn onClick={(e) => minusBtnOnClick(e)}>
                <BtnWrap>-</BtnWrap>
              </MinusBtn>
              <CountText>{optionCount}</CountText>
              <PlusBtn onClick={(e) => plusBtnOnClick(e)}>
                <BtnWrap>+</BtnWrap>
              </PlusBtn>
            </CountBox>
            <PriceText>
              {(
                (orderPaymentData.proctSlPx + currentOptionExtraAmt) *
                optionCount
              ).toLocaleString()}
              원
            </PriceText>
          </CountPriceBox>
        </OptionItem>
      </OptionBox>
      <BuyBtnBox>
        <Link to={`/orders/${Date.now()}`}>
          <ColoredButton
            color="white"
            font="Subhead2"
            onClick={setPaymentConfig}
          >
            구매하기
          </ColoredButton>
        </Link>
      </BuyBtnBox>
    </OptionCountContainer>
  );
};

const OptionCountContainer = styled.div``;

const OptionBox = styled.div`
  padding: 20px ${({ theme }) => theme.paddings.base};
  background-color: white;
  border-radius: 8px 8px 0 0;
`;

const OptionItem = styled.div`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Body3};
  color: ${({ theme }) => theme.grey.Grey8};
`;

const TitleDeleteBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
  button {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.grey.Grey4};
    cursor: pointer;
  }
`;
const CountPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const XButtonBtn = styled.button`
  padding: 0px;
`;

const XButtonImg = styled.img`
  width: 20px;
  margin-left: 20px;
`;

const CountBox = styled.div``;
const MinusBtn = styled.button`
  line-height: 1px;
  width: 30px;
  height: 30px;
  padding: 0;
  aspect-ratio: 1/1;
  background-color: ${({ theme }) => theme.grey.Grey0};
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.grey.Grey6};
  cursor: pointer;
`;
const PlusBtn = styled(MinusBtn)`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
`;

const BtnWrap = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
`;
const CountText = styled.span`
  padding: 0 15px;
  display: inline-block;
  width: 20px;
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Body3};
  color: ${({ theme }) => theme.grey.Grey8};
`;
const PriceText = styled.span`
  font: ${({ theme }) => theme.fontSizes.Subhead3};
  color: black;
`;

const BuyBtnBox = styled.div`
  padding: 15px ${({ theme }) => theme.paddings.base} 40px
    ${({ theme }) => theme.paddings.base};
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.grey.Grey3};
`;

export default OptionCount;
