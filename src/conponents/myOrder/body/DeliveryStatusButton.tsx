import React from 'react';
import styled from 'styled-components';
import OutlineButton from '../../OutlineButton';

const DeliveryStatusButton: React.FC = () => {
  const OutlineButtonStyle: React.CSSProperties = {
    padding: '6px 10px',
  };

  return (
    <DeliveryStatusButtonContainer>
      <OutlineButton
        style={OutlineButtonStyle}
        font="Body2"
        border="Orange5"
        color="Orange5"
      >
        결제완료
      </OutlineButton>
    </DeliveryStatusButtonContainer>
  );
};

const DeliveryStatusButtonContainer = styled.div`
  flex: 0.49;
`;

export default DeliveryStatusButton;
