import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled, { css } from 'styled-components';
import {
  accountNumAtom,
  bankerNameAtom,
  completeBooleanAtom,
} from '../../../states/accountAtom';
import { getBankList } from '../../../services/rewardAccount/getBankList';
import {
  putRewardAccount,
  putRewardAccountProps,
} from '../../../services/rewardAccount/putRewardAccount';
import { getRewardAccount } from '../../../services/rewardAccount/getRewardAccount';

const RegisterAccount: React.FC = () => {
  const [accountNum, setAccountNum] = useRecoilState(accountNumAtom);
  const [bankerName, setBankerName] = useRecoilState(bankerNameAtom);
  const [bankList, setBankList] = useState<string[]>();

  const setCompleteBoolean = useSetRecoilState(completeBooleanAtom);

  useEffect(() => {
    getBankList().then((res) => {
      setBankList(res);
      getRewardAccount()
        .then((res) => {
          setAccountNum(res.accountNum);
          setBankerName(res.bankName);
        })
        .catch(() => {});
    });
  }, []);

  const accountNumOnChange = (text: string) => {
    // setAccountNum(text);
    if (!isNaN(Number(text))) {
      setAccountNum(text);
    } else return;
  };
  const bankerSelectOnChange = (text: string) => {
    setBankerName(text);
  };

  const onClickRegisterAccount = () => {
    const putRewardAccountData: putRewardAccountProps = {
      accountNum: accountNum,
      bankName: bankerName,
    };

    putRewardAccount(putRewardAccountData).then(() => {
      setCompleteBoolean(true);
    });
  };

  return (
    <RegisterAccountContainer>
      <RegisterBankWrap>
        <Title>등록할 계좌를 선택해주세요</Title>
        <AccountInputbankerBox>
          <AccountInputWrap>
            <AccountInput
              value={accountNum}
              onChange={(e) => accountNumOnChange(e.target.value)}
            />
          </AccountInputWrap>
          <BankerSelectBox>
            <BankerSelect
              onChange={(e) => bankerSelectOnChange(e.target.value)}
              required={true}
              value={bankerName}
            >
              <option value={''} disabled={true}>
                은행사
              </option>
              {bankList &&
                bankList.map((v, i) => (
                  <option key={i} value={v}>
                    {v}
                  </option>
                ))}
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
            onClick={onClickRegisterAccount}
            $active={accountNum.length > 4 && bankerName.length > 0}
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
const AccountInputWrap = styled.div`
  width: 62%;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey5};
  font: ${({ theme }) => theme.fontSizes.Body3};
`;

const AccountInput = styled.input`
  width: 90%;
  outline: none;
  border: none;

  font: ${({ theme }) => theme.fontSizes.Body3};
`;

const BankerSelectBox = styled.div`
  position: relative;
  width: 34%;
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
  background-color: white;
  color: black;
`;

const ConfirmBtnBox = styled.div`
  position: fixed;
  bottom: 0;
  padding: 10px 0 40px 0;
  max-width: 500px;
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
