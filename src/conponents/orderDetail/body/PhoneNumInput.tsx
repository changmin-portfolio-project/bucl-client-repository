import React from 'react';
import styled from 'styled-components';
import { shpAddrRegAtom } from '../../../states/orderDetailAtom';
import { useRecoilState } from 'recoil';

const PhoneNumInput: React.FC = () => {
  const [shpAddrReg, setShpAddrReg] = useRecoilState(shpAddrRegAtom);

  const contactNumSplit = shpAddrReg.contactNumber.split('-');

  const firstPhoneOnChange = (text: string) => {
    if (!isNaN(Number(text))) {
      setShpAddrReg((prev) => ({
        ...prev,
        contactNumber:
          text + '-' + contactNumSplit[1] + '-' + contactNumSplit[2],
      }));
    } else return;
  };
  const middlePhoneNumOnChange = (text: string) => {
    if (!isNaN(Number(text))) {
      setShpAddrReg((prev) => ({
        ...prev,
        contactNumber:
          contactNumSplit[0] + '-' + text + '-' + contactNumSplit[2],
      }));
    } else return;
  };
  const lastPhoneNumOnChange = (text: string) => {
    if (!isNaN(Number(text))) {
      // 입력값이 숫자라면 상태 업데이트

      setShpAddrReg((prev) => ({
        ...prev,
        contactNumber:
          contactNumSplit[0] + '-' + contactNumSplit[1] + '-' + text,
      }));
    } else return;
  };

  return (
    <PhoneInputBox>
      <Input
        value={contactNumSplit[0] || ''}
        onChange={(e) => firstPhoneOnChange(e.target.value)}
        placeholder="000"
        maxLength={3}
      />
      <Input
        value={contactNumSplit[1] || ''}
        onChange={(e) => middlePhoneNumOnChange(e.target.value)}
        placeholder="0000"
        maxLength={4}
      />
      <Input
        value={contactNumSplit[2] || ''}
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
