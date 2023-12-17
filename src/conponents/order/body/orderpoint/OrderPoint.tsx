import React, { ChangeEvent, useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import styled from 'styled-components';
import { rwdUseAmtAtom } from '../../../../states/rewardAtom';
import { useRecoilState } from 'recoil';
import { ORD_TOT_AMT, RWD_CRNT_AMT } from '../../../../const/CookieVars';
import { MIN_ORD_AMT } from '../../../../const/Payment';
import { cookieNumUtil } from '../../../../utils/UndefinedProcessUtl';

const OrderPoint: React.FC = () => {
  const cookies = new Cookies();
  const [numberInput, setNumberInput] = useState('0');
  const [rwdUseAmtState, setRwdUseAmtState] = useRecoilState(rwdUseAmtAtom);

  useEffect(() => {
    setRwdUseAmtState(0);
  }, []);

  useEffect(() => {
    setNumberInput(rwdUseAmtState.toString());
  }, [rwdUseAmtState]);

  const useTotRwdUseAmt = () => {
    const rwdCrntAmt = cookies.get(RWD_CRNT_AMT);
    const ordTotAmt = cookies.get(ORD_TOT_AMT);
    const minOrdTotAmt = ordTotAmt - MIN_ORD_AMT;
    if (rwdCrntAmt < minOrdTotAmt) {
      setRwdUseAmtState(cookies.get(RWD_CRNT_AMT));
    } else {
      setRwdUseAmtState(minOrdTotAmt);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) || inputValue === '') {
      const numericValue = parseInt(inputValue, 10);
      const rwdCrntAmt = cookies.get(RWD_CRNT_AMT);
      if (inputValue === '') {
        setNumberInput('0');
        setRwdUseAmtState(0);
      } else if (
        numericValue <= rwdCrntAmt &&
        numericValue <= cookies.get(ORD_TOT_AMT) - MIN_ORD_AMT
      ) {
        setNumberInput(numericValue.toString());
        setRwdUseAmtState(numericValue);
      }
    }
  };
  return (
    <StyledOrderPointContainer>
      <PointBody3>포인트 사용</PointBody3>
      <PointInputContainer>
        <PointInputItem>
          <PointUseAmt>포인트</PointUseAmt>
          <PointInputSubItem>
            <PointInput onChange={handleInputChange} value={numberInput} />
            <PointInputUnit>원</PointInputUnit>
          </PointInputSubItem>
        </PointInputItem>
        <PointAllUseBtn onClick={useTotRwdUseAmt}>모두 사용</PointAllUseBtn>
      </PointInputContainer>
      <PointOwnAmt>
        사용 가능 포인트{' '}
        {cookieNumUtil(cookies.get(RWD_CRNT_AMT).toLocaleString())}원
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
  padding: 0 20px 0 20px;
`;

const PointInputItem = styled.div`
  display: flex;
  border-bottom: 1px solid #eaecef;
  width: 100%;
  justify-content: space-between;
`;

const PointInputSubItem = styled.div`
  width: 80%;
  text-align: right;
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

const PointAllUseBtn = styled.button`
  font: ${({ theme }) => theme.fontSizes.Body1};
  border-radius: 4px;
  border: 1px solid var(--grey-5, #acb5bd);
  background: #fff;
  width: 60px;
  height: 28px;
  flex-shrink: 0;
  margin-left: 10px;
  color: var(--black, #000);
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
  margin: auto 0px;
  padding: 5px 0px 2px 0px;
`;

const PointOwnAmt = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body2};
  margin: auto 0px;
  padding: 5px 20px 0px 20px;
  color: var(--grey-5, #acb5bd);
`;

export default OrderPoint;
