import React, { SetStateAction } from 'react';
import { Cookies, useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  ADDR,
  ADDR_NOM,
  CNTCT_NUM,
  PROCT_OPT_NOM,
  PROCT_OPT_AMT,
  PROCT_OPT_QTY,
  PROCT_SL_PX,
  RCPNT_NOM,
  SHP_FEE,
  TOT_PROCT_AMT,
  PROCT_CODE,
  SKU_CODE,
  ZIP_CODE,
  ORD_TOT_AMT,
  CNSMR_AMT,
} from '../../../const/CookieVars';
import ColoredButton from '../../ColoredButton';

interface OptionCountProps {
  currentOption: string;
  setCurrentOption: React.Dispatch<SetStateAction<string>>;
  currentOptionExtraAmt: number;
  setCurrentOptionExtraAmt: React.Dispatch<SetStateAction<number>>;
  optionCount: number;
  setOptionCount: React.Dispatch<SetStateAction<number>>;
}

const OptionCount: React.FC<OptionCountProps> = ({
  currentOption,
  setCurrentOption,
  currentOptionExtraAmt,
  setCurrentOptionExtraAmt,
  optionCount,
  setOptionCount,
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
    setCookie(
      ORD_TOT_AMT,
      (cookies.get(PROCT_SL_PX) + currentOptionExtraAmt) * optionCount,
    );
    setCookie(
      TOT_PROCT_AMT,
      (cookies.get(CNSMR_AMT) + currentOptionExtraAmt) * optionCount,
    );
    setCookie(SHP_FEE, 0);
    setCookie(ADDR_NOM, '집');
    setCookie(RCPNT_NOM, '황주현');
    setCookie(CNTCT_NUM, '010-0000-000');
    setCookie(
      ADDR,
      '경기도 수원시 영통구 광교호수공원로 20 더샵레이크시티 오피스텔',
    );
    setCookie(ZIP_CODE, '54402');
    setCookie(PROCT_CODE, '381285902143');
    setCookie(SKU_CODE, '38492219056');
  };

  return (
    <OptionCountContainer>
      <OptionBox>
        <OptionItem>
          <TitleDeleteBox>
            <span>{currentOption}</span>
            <button onClick={(e) => deleteBtnOnClick(e)}>x</button>
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
  padding: 20px 7%;
  background-color: white;
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

const CountBox = styled.div``;
const MinusBtn = styled.button`
  min-width: 30px;
  aspect-ratio: 1/1;
  background-color: ${({ theme }) => theme.grey.Grey0};
  border: none;
  border-radius: 50%;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.grey.Grey6};
  cursor: pointer;
`;
const PlusBtn = styled(MinusBtn)`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
`;
const CountText = styled.span`
  padding: 0 15px;
  font: ${({ theme }) => theme.fontSizes.Body3};
  color: ${({ theme }) => theme.grey.Grey8};
`;
const PriceText = styled.span`
  font: ${({ theme }) => theme.fontSizes.Subhead3};
  color: black;
`;

const BuyBtnBox = styled.div`
  padding: 15px 7% 40px 7%;
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.grey.Grey3};
`;

export default OptionCount;
