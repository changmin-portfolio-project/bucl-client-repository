import React from 'react';
import { useRecoilState } from 'recoil';
import { addrRegFormAtom } from '../../../../states/addressAtom';
import PhoneNumInputTemplate from '../../../PhoneNumInputTemplate';

const AddressPhoneNumInput: React.FC = () => {
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
    <PhoneNumInputTemplate
      firstPhoneNum={addrRegForm.firstPhoneNum}
      middlePhoneNum={addrRegForm.middlePhoneNum}
      lastPhoneNum={addrRegForm.lastPhoneNum}
      firstPhoneOnChange={firstPhoneOnChange}
      middlePhoneNumOnChange={middlePhoneNumOnChange}
      lastPhoneNumOnChange={lastPhoneNumOnChange}
    />
  );
};

export default AddressPhoneNumInput;
