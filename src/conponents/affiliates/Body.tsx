import React from 'react';
import styled from 'styled-components';
import PromotionMethod from './body/PromotionMethod';
import ProductInfo from './body/ProductInfo';
import SocialPromotion from './body/SocialPromotion';

const Body: React.FC = () => {
  return (
    <BodyContainer>
      <PromotionMethod />
      <ProductInfo />
      <SocialPromotion />
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  padding: 57px 0 72px 0;
`;

export default Body;
