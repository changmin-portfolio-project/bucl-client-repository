import React from 'react';
import PromotionMethod from './body/PromotionMethod';
import ProductInfo from './body/ProductInfo';
import SocialPromotion from './body/SocialPromotion';
import BodyLayout from '../layout/BodyLayout';

const Body: React.FC = () => {
  return (
    <BodyLayout>
      <PromotionMethod />
      <ProductInfo />
      <SocialPromotion />
    </BodyLayout>
  );
};

export default Body;
