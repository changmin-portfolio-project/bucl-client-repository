import React, { useEffect } from 'react';
import styled from 'styled-components';

import Recipient from './body/TrackInfoBody';
import { getOrderTrackingInfo } from '../../services/orderDetail/getOrderTrackingInfo';
import { useParams } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { trackInfoAtom } from '../../states/trackDeliveryAtom';

const Body: React.FC = () => {
  const setTrackInfo = useSetRecoilState(trackInfoAtom);

  const param = useParams();

  useEffect(() => {
    const orderCode = param.order_code;
    if (orderCode !== undefined) {
      getOrderTrackingInfo(orderCode).then((data) => {
        setTrackInfo(data);
      });
    }
  }, []);

  return (
    <BodyContainer>
      <Recipient />
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  padding: 57px 0 100px 0;
`;

export default Body;
