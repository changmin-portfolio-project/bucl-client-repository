import React from 'react';
import styled from 'styled-components';

import {
  CNTCT_FOUR_NUM_MAX_LENGTH,
  CNTCT_FOUR_NUM_PLACE_HOLDER,
  CNTCT_THREE_NUM_MAX_LENGTH,
  CNTCT_THREE_NUM_PLACE_HOLDER,
} from '../const/AttributeVar';

interface PhoneNumInputTemplateProps {
  firstPhoneNum: string;
  middlePhoneNum: string;
  lastPhoneNum: string;
  firstPhoneOnChange: (phoneNum: string) => void;
  middlePhoneNumOnChange: (phoneNum: string) => void;
  lastPhoneNumOnChange: (phoneNum: string) => void;
}

const PhoneNumInputTemplate: React.FC<PhoneNumInputTemplateProps> = ({
  firstPhoneNum,
  middlePhoneNum,
  lastPhoneNum,
  firstPhoneOnChange,
  middlePhoneNumOnChange,
  lastPhoneNumOnChange,
}) => {
  /** 바꿈 */

  return (
    <PhoneInputBox>
      <Input
        value={firstPhoneNum}
        onChange={(e) => firstPhoneOnChange(e.target.value)}
        placeholder={CNTCT_THREE_NUM_PLACE_HOLDER}
        maxLength={CNTCT_THREE_NUM_MAX_LENGTH}
      />
      <Input
        value={middlePhoneNum}
        onChange={(e) => middlePhoneNumOnChange(e.target.value)}
        placeholder={CNTCT_FOUR_NUM_PLACE_HOLDER}
        maxLength={CNTCT_FOUR_NUM_MAX_LENGTH}
      />
      <Input
        value={lastPhoneNum}
        onChange={(e) => lastPhoneNumOnChange(e.target.value)}
        placeholder={CNTCT_FOUR_NUM_PLACE_HOLDER}
        maxLength={CNTCT_FOUR_NUM_MAX_LENGTH}
      />
    </PhoneInputBox>
  );
};

const Input = styled.input`
  padding: 10px;
  font: ${({ theme }) => theme.fontSizes.Body2};
  border: 1px solid ${({ theme }) => theme.grey.Grey5};
  border-radius: 4px;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.grey.Grey5};
  }
  font-family: Pretendard-Light;
  font-weight: 400;

  width: calc(32% - 20px);
  text-align: center;
`;

const PhoneInputBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default PhoneNumInputTemplate;
