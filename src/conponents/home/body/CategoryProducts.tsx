import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { useRecoilValue } from 'recoil';
import { productListAtom } from '../../../states/productAtom';
import { HOME_INF_POS_NAME } from '../../../const/Pagenation';
import HomeInfiniteScroll from '../../../hook/HomeInfiniteScroll';

const CategoryProducts: React.FC = () => {
  const list = useRecoilValue(productListAtom);

  return (
    <>
      <CategoryProductsContainer
        $height={window.innerHeight.toString()}
        id={HOME_INF_POS_NAME}
      >
        {Array.isArray(list) &&
          list.map((v, i) => <ProductItem key={i} data={v} uniqueKey={i} />)}
        <HomeInfScrollWrap>
          <HomeInfiniteScroll />
        </HomeInfScrollWrap>
      </CategoryProductsContainer>
    </>
  );
};

const CategoryProductsContainer = styled.div<{ $height: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  scroll-snap-type: y mandatory;
  overflow-y: auto;
  height: calc(${(props) => props.$height}px - 132px);
`;

const HomeInfScrollWrap = styled.div`
  padding: 10px 0 60px 0;
`;

export default CategoryProducts;
