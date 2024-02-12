import React, { useEffect } from 'react';
import styled from 'styled-components';
import WishItem from './body/WishItem';
import { getWishList } from '../../services/wish/getWishList';
import { useRecoilState } from 'recoil';
import { wishProductListAtom } from '../../states/wishAtom';

const Body: React.FC = () => {
  const [wishList, setWishList] = useRecoilState(wishProductListAtom);
  useEffect(() => {
    getWishList().then((res) => {
      setWishList(res.data);
    });
  }, []);
  return (
    <BodyContainer>
      {wishList?.map((v, i) => (
        <WishItem
          key={i}
          wishId={i}
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
  padding-top: 58px;
  padding-bottom: 100px;
`;

export default Body;
