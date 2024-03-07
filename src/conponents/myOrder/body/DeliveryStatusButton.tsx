import React from 'react';
import styled from 'styled-components';
import OutlineButton from '../../OutlineButton';

import { orderStatusNameFunc } from '../../../const/OrderVars';

interface DeliveryStatusButtonProps {
  orderStatus: string;
}

const DeliveryStatusButton: React.FC<DeliveryStatusButtonProps> = ({
  orderStatus,
}) => {
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
        {orderStatusNameFunc(orderStatus)}
      </OutlineButton>
    </DeliveryStatusButtonContainer>
  );
};

const DeliveryStatusButtonContainer = styled.div`
  flex: 0.49;
`;

export default DeliveryStatusButton;
