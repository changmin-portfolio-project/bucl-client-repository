import React, { SetStateAction } from 'react';
import { Cookies, useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  PROCT_OPT_NOM,
  PROCT_OPT_AMT,
  PROCT_OPT_QTY,
  PROCT_SL_PX,
  SHP_FEE,
  TOT_PROCT_AMT,
  ORD_TOT_AMT,
  CNSMR_AMT,
  SKU_CODE,
} from '../../../const/CookieVars';
import ColoredButton from '../../ColoredButton';
import { isActivePopUp } from '../../../utils/PopUpUtil';

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
  const [, setCookie] = useCookies();
  const cookies = new Cookies();
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
    setCookie(PROCT_OPT_NOM, currentOption);
    setCookie(PROCT_OPT_AMT, cookies.get(PROCT_SL_PX) + currentOptionExtraAmt);
    setCookie(PROCT_OPT_QTY, optionCount);
    setCookie(SKU_CODE, crntOptSkuCode);
    setCookie(
      ORD_TOT_AMT,
      (cookies.get(PROCT_SL_PX) + currentOptionExtraAmt) * optionCount,
    );
    setCookie(
      TOT_PROCT_AMT,
      (cookies.get(CNSMR_AMT) + currentOptionExtraAmt) * optionCount,
    );
    setCookie(SHP_FEE, 0);

    isActivePopUp(true);
  };

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
              <MinusBtn onClick={(e) => minusBtnOnClick(e)}>-</MinusBtn>
              <CountText>{optionCount}</CountText>
              <PlusBtn onClick={(e) => plusBtnOnClick(e)}>+</PlusBtn>
            </CountBox>
            <PriceText>
              {(
                (cookies.get(PROCT_SL_PX) + currentOptionExtraAmt) *
                optionCount
              )?.toLocaleString()}
              원
            </PriceText>
          </CountPriceBox>
        </OptionItem>
      </OptionBox>
      <BuyBtnBox>
        <Link to="/orders/46898469">
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
  width: 30px;
  height: 30px;
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
