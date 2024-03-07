import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import ColoredButton from '../../ColoredButton';
import { shpAddrRegAtom } from '../../../states/orderDetailAtom';
import { putAddress } from '../../../services/orderDetail/putAddress';
import { useParams } from 'react-router';

const ModifyShpAddressButton: React.FC = () => {
  const shpAddrReg = useRecoilValue(shpAddrRegAtom);
  const param = useParams();

  const registerBtnOnClick = () => {
    if (!(Object.keys(shpAddrReg).length === 0)) {
      const orderCode = param.order_code;
      if (orderCode !== undefined) {
        putAddress(orderCode, shpAddrReg).then(() => {
          window.location.reload();
        });
      }
    } else {
      alert('모든 값을 입력해주세요.');
    }
  };

  const ColoredButtonStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px 0',
  };
  return (
    <RegisterAddressBtnContainer>
      <ColoredButton
        font="Subhead2"
        color="white"
        onClick={registerBtnOnClick}
        style={ColoredButtonStyle}
      >
        배송지 수정
      </ColoredButton>
    </RegisterAddressBtnContainer>
  );
};

const RegisterAddressBtnContainer = styled.div`
  padding-bottom: 10px;
  img {
    margin-bottom: -2px;
  }
`;
export default ModifyShpAddressButton;
