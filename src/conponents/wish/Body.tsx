import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import WishItem from './body/WishItem';
import { WishProduct, getWishList } from '../../services/wish/getWishList';

const Body: React.FC = () => {
  const [wishList, setWishList] = useState<WishProduct[]>();
  useEffect(() => {
    getWishList().then((res) => {
      console.log(res);
      setWishList(res.data);
    });
  }, []);
  return (
    <BodyContainer>
      {wishList?.map((v, i) => (
        <WishItem
          key={i}
          brandName={v.brandName}
          price={v.consumerPrice}
          productName={v.name}
          starRate={v.starRate}
          totalReviewCount={v.totalReviewCount}
          productCode={v.productCode}
          imgPath={v.imagePath[0]}
        />
      ))}
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  padding-top: 80px;
  padding-bottom: 100px;
`;

export default Body;
