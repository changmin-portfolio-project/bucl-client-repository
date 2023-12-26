import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { accountNumAtom, bankerNameAtom } from '../../../states/accountAtom';

const RegisterAccount: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [accountNum, setAccountNum] = useRecoilState(accountNumAtom);
  const setBankerName = useSetRecoilState(bankerNameAtom);

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
      <Title>등록할 계좌를 선택해주세요</Title>
      <AccountInputbankerBox>
        <AccountInput
          value={accountNum}
          onChange={(e) => accountNumOnChange(e.target.value)}
        />
        <BankerSelectBox>
          <BankerSelect onChange={(e) => bankerSelectOnChange(e.target.value)}>
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
    </RegisterAccountContainer>
  );
};

const RegisterAccountContainer = styled.section`
  padding-top: 20px;
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

export default RegisterAccount;
