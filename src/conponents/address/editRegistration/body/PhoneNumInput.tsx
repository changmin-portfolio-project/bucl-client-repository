import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { addrRegFormAtom } from '../../../../states/addressAtom';

const PhoneNumInput: React.FC = () => {
  const [addrRegForm, setAddrRegForm] = useRecoilState(addrRegFormAtom);

  const [phoneSelect, setPhoneSelect] = useState<boolean>(false);
  const phoneInputBoxOnClick = () => {
    setPhoneSelect(true);
  };

  const firstPhoneOnChange = (text: string, e: React.MouseEvent) => {
    setAddrRegForm((prev) => ({
      ...prev,
      firstPhoneNum: text,
    }));
    setPhoneSelect(false);
    e.stopPropagation();
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

  const firstPhoneNumList = ['010', '031', '02'];
  return (
    <PhoneInputBox>
      <PhoneInput onClick={phoneInputBoxOnClick}>
        {addrRegForm.firstPhoneNum}
        <svg
          width="20"
          height="19"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 6.375L9 10.625L13.5 6.375"
            stroke="#ACB5BD"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {phoneSelect && (
          <PhoneSelect>
            {firstPhoneNumList.map((v, i) => (
              <li onClick={(e) => firstPhoneOnChange(v, e)} key={i}>
                {v}
              </li>
            ))}
          </PhoneSelect>
        )}
      </PhoneInput>
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
const PhoneInput = styled.div`
  position: relative;
  padding: 10px;
  width: calc(32% - 20px);
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Body2};
  border: 1px solid ${({ theme }) => theme.grey.Grey5};
  border-radius: 4px;
  outline: none;
  svg {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translate(-50%, -50%);
    margin-left: 25px;
  }
`;
const PhoneSelect = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  font: ${({ theme }) => theme.fontSizes.Body2};
  border: 1px solid ${({ theme }) => theme.grey.Grey5};
  border-radius: 4px;
  li {
    padding: 5px 0;
    background-color: white;
    border-top: 1px solid ${({ theme }) => theme.grey.Grey5};
  }
`;

export default PhoneNumInput;
