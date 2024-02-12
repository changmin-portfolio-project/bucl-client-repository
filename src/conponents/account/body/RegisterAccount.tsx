import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled, { css } from 'styled-components';
import {
  accountNumAtom,
  bankerNameAtom,
  completeBooleanAtom,
} from '../../../states/accountAtom';

const RegisterAccount: React.FC = () => {
  const [accountNum, setAccountNum] = useRecoilState(accountNumAtom);
  const [bankerName, setBankerName] = useRecoilState(bankerNameAtom);

  const setCompleteBoolean = useSetRecoilState(completeBooleanAtom);

  const accountNumOnChange = (text: string) => {
    // setAccountNum(text);
    if (!isNaN(Number(text))) {
      setAccountNum(text);
    } else return;
  };
  const bankerSelectOnChange = (text: string) => {
    setBankerName(text);
  };

  return (
    <RegisterAccountContainer>
      <RegisterBankWrap>
        <Title>등록할 계좌를 선택해주세요</Title>
        <AccountInputbankerBox>
          <AccountInput
            value={accountNum}
            onChange={(e) => accountNumOnChange(e.target.value)}
          />
          <BankerSelectBox>
            <BankerSelect
              onChange={(e) => bankerSelectOnChange(e.target.value)}
            >
              <option>은행사</option>
              <option>국민</option>
              <option>신한</option>
              <option>하나</option>
            </BankerSelect>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#ACB5BD"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </BankerSelectBox>
        </AccountInputbankerBox>
      </RegisterBankWrap>
      <ConfirmBtnBox>
        <ConfirmBtnWrap>
          <ConfirmBtn
            onClick={() => setCompleteBoolean(true)}
            $active={accountNum.length > 0 && bankerName.length > 0}
          >
            확인
          </ConfirmBtn>
        </ConfirmBtnWrap>
      </ConfirmBtnBox>
    </RegisterAccountContainer>
  );
};

const RegisterAccountContainer = styled.section`
  padding-top: 20px;
`;

const RegisterBankWrap = styled.div`
  padding: 57px 7%;
`;
const Title = styled.p`
  font: ${({ theme }) => theme.fontSizes.Subhead4};
`;

const AccountInputbankerBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
`;
const AccountInput = styled.input`
  padding: 5px 0;
  width: 70%;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey5};
  font: ${({ theme }) => theme.fontSizes.Body3};
  &:focus-visible {
    border-bottom: 1px solid ${({ theme }) => theme.mainColor.Orange5};
    caret-color: ${({ theme }) => theme.mainColor.Orange5};
  }
`;

const BankerSelectBox = styled.div`
  position: relative;
  width: 25%;
  svg {
    position: absolute;
    z-index: 999;
    top: 50%;
    right: 0%;
    transform: translate(0, -50%);
  }
`;
const BankerSelect = styled.select`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey5};
  font: ${({ theme }) => theme.fontSizes.Body3};
  appearance: none;
`;

const ConfirmBtnBox = styled.div`
  position: fixed;
  bottom: 0;
  padding: 10px 0 40px 0;
  max-width: 600px;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

const ConfirmBtnWrap = styled.div`
  padding: 0px 20px;
`;
const ConfirmBtn = styled.button<{ $active: boolean }>`
  position: relative;
  padding: 10px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border: none;
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: white;
  ${(props) =>
    !props.$active &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `};
`;

export default RegisterAccount;
