import React, { useState } from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { CNTCT_NUM } from '../../../const/CookieVars';

interface cntctNumForm {
  firstPhoneNum: string;
  middlePhoneNum: string;
  lastPhoneNum: string;
}

const PhoneNumInput: React.FC = () => {
  const [, setCookie] = useCookies();

  const [cntctNum, setCntctNum] = useState<cntctNumForm>({
    firstPhoneNum: '',
    middlePhoneNum: '',
    lastPhoneNum: '',
  });

  const firstPhoneOnChange = (text: string) => {
    if (!isNaN(Number(text))) {
      // 입력값이 숫자라면 상태 업데이트
      setCntctNum((prev) => ({
        ...prev,
        firstPhoneNum: text,
      }));
      setCookie(
        CNTCT_NUM,
        text + cntctNum.middlePhoneNum + cntctNum + lastPhoneNumOnChange,
      );
    } else return;
  };
  const middlePhoneNumOnChange = (text: string) => {
    if (!isNaN(Number(text))) {
      // 입력값이 숫자라면 상태 업데이트
      setCntctNum((prev) => ({
        ...prev,
        middlePhoneNum: text,
      }));
      setCookie(
        CNTCT_NUM,
        text + cntctNum.middlePhoneNum + cntctNum + lastPhoneNumOnChange,
      );
    } else return;
  };
  const lastPhoneNumOnChange = (text: string) => {
    console.log(!isNaN(Number(text)));
    if (!isNaN(Number(text))) {
      // 입력값이 숫자라면 상태 업데이트
      setCntctNum((prev) => ({
        ...prev,
        lastPhoneNum: text,
      }));
      setCookie(
        CNTCT_NUM,
        text + cntctNum.middlePhoneNum + cntctNum + lastPhoneNumOnChange,
      );
    } else return;
  };

  return (
    <PhoneInputBox>
      <Input
        value={cntctNum.firstPhoneNum}
        onChange={(e) => firstPhoneOnChange(e.target.value)}
        placeholder="000"
        maxLength={3}
      />
      <Input
        value={cntctNum.middlePhoneNum}
        onChange={(e) => middlePhoneNumOnChange(e.target.value)}
        placeholder="0000"
        maxLength={4}
      />
      <Input
        value={cntctNum.lastPhoneNum}
        onChange={(e) => lastPhoneNumOnChange(e.target.value)}
        placeholder="0000"
        maxLength={4}
      />
    </PhoneInputBox>
  );
};

const Input = styled.input`
  padding: 10px;
  width: calc(100% - 20px);
  font: ${({ theme }) => theme.fontSizes.Body2};
  border: 1px solid ${({ theme }) => theme.grey.Grey5};
  border-radius: 4px;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.grey.Grey5};
  }
`;

const PhoneInputBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default PhoneNumInput;
