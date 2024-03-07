import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { addrRegFormAtom } from '../../../../states/addressAtom';

const PhoneNumInput: React.FC = () => {
  const [addrRegForm, setAddrRegForm] = useRecoilState(addrRegFormAtom);

  const firstPhoneOnChange = (text: string) => {
    if (!isNaN(Number(text))) {
      // 입력값이 숫자라면 상태 업데이트
      setAddrRegForm((prev) => ({
        ...prev,
        firstPhoneNum: text,
      }));
    } else return;
  };
  const middlePhoneNumOnChange = (text: string) => {
    if (!isNaN(Number(text))) {
      // 입력값이 숫자라면 상태 업데이트
      setAddrRegForm((prev) => ({
        ...prev,
        middlePhoneNum: text,
      }));
    } else return;
  };
  const lastPhoneNumOnChange = (text: string) => {
    if (!isNaN(Number(text))) {
      // 입력값이 숫자라면 상태 업데이트
      setAddrRegForm((prev) => ({
        ...prev,
        lastPhoneNum: text,
      }));
    } else return;
  };

  return (
    <PhoneInputBox>
      <Input
        value={addrRegForm.firstPhoneNum}
        onChange={(e) => firstPhoneOnChange(e.target.value)}
        placeholder="000"
        maxLength={3}
      />
      <Input
        value={addrRegForm.middlePhoneNum}
        onChange={(e) => middlePhoneNumOnChange(e.target.value)}
        placeholder="0000"
        maxLength={4}
      />
      <Input
        value={addrRegForm.lastPhoneNum}
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
