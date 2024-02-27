import React from 'react';

import styled from 'styled-components';
import ColoredButton from '../../ColoredButton';

const NotSelectAddrAddButton: React.FC = () => {
  const ColoredButtonStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px 0',
  };
  return (
    <AddressAddBtnContainer>
      <NotSelectOrdAddrButton>
        <ColoredButton
          font="Subhead2"
          color="white"
          backgroundColor="Orange3"
          style={ColoredButtonStyle}
          disabled={true}
        >
          선택 완료
        </ColoredButton>
      </NotSelectOrdAddrButton>
    </AddressAddBtnContainer>
  );
};

const AddressAddBtnContainer = styled.div`
  padding-bottom: 10px;
  img {
    margin-bottom: -2px;
  }
`;

const NotSelectOrdAddrButton = styled.div`
  pointer-events: none;
`;

export default NotSelectAddrAddButton;
