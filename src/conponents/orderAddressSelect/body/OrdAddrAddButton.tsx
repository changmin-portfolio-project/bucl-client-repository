import React from 'react';
import styled from 'styled-components';
import ColoredButton from '../../ColoredButton';
import { useSetRecoilState } from 'recoil';
import { isNewOrdAddrAtom } from '../../../states/orderAtom';

const OrdAddrAddButton: React.FC = () => {
  const setIsNewOrdAddr = useSetRecoilState(isNewOrdAddrAtom);
  const ColoredButtonStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px 0',
  };
  return (
    <OrdAddrAddButtonContainer>
      <ColoredButton
        font="Subhead1"
        color="Orange4"
        backgroundColor="white"
        onClick={() => setIsNewOrdAddr(true)}
        style={ColoredButtonStyle}
      >
        <img src="/assets/PlusIconOrange.svg" />새 배송지 추가하기
      </ColoredButton>
    </OrdAddrAddButtonContainer>
  );
};

const OrdAddrAddButtonContainer = styled.div`
  padding-bottom: 10px;
  img {
    margin-bottom: -2px;
  }
`;

export default OrdAddrAddButton;
