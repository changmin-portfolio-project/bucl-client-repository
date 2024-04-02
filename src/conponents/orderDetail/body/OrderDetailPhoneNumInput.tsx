import React from 'react';
import { shpAddrRegAtom } from '../../../states/orderDetailAtom';
import { useRecoilState } from 'recoil';
import PhoneNumInputTemplate from '../../PhoneNumInputTemplate';

const OrdDetailPhoneNumInput: React.FC = () => {
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
    <PhoneNumInputTemplate
      firstPhoneNum={contactNumSplit[0] || ''}
      middlePhoneNum={contactNumSplit[1] || ''}
      lastPhoneNum={contactNumSplit[2] || ''}
      firstPhoneOnChange={firstPhoneOnChange}
      middlePhoneNumOnChange={middlePhoneNumOnChange}
      lastPhoneNumOnChange={lastPhoneNumOnChange}
    />
  );
};

export default OrdDetailPhoneNumInput;
