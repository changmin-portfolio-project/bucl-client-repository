import React from 'react';
import styled from 'styled-components';
import Dropdown from './AddressInfoReqDropDown';
import { DIRECT_INPUT_PHRASE } from '../../../../const/Phrase';

const AddressInfoReq: React.FC = () => {
  const options = [
    '문 앞에 놓아주세요.',
    '관리실에 맡겨주세요.',
    '배송 전 연락바랍니다.',
    DIRECT_INPUT_PHRASE,
  ];
  return (
    <AddressInfoReqContainer>
      <AddressInfoBody3>배송 요청사항</AddressInfoBody3>
      <Dropdown options={options} />
    </AddressInfoReqContainer>
  );
};

const AddressInfoReqContainer = styled.div`
  margin-bottom: 20px;
`;

const AddressInfoBody3 = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body3};
  padding: 9.5px 20px 8.5px 20px;
  border-bottom: 1px solid #eaecef;
`;

// const AddressInfoBody2 = styled.div`
//   font: ${({ theme }) => theme.fontSizes.Body2};
// `;

export default AddressInfoReq;
