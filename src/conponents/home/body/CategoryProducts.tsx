import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { useRecoilValue } from 'recoil';
import { productListAtom } from '../../../states/productAtom';
import { HOME_INF_POS_NAME } from '../../../const/Pagenation';
import HomeInfiniteScroll from '../../../hook/HomeInfiniteScroll';
import { WINDOW_RESIZE } from '../../../const/AttributeVar';

const CategoryProducts: React.FC = () => {
  const list = useRecoilValue(productListAtom);
  const [windowHeight, setWindowHeight] = useState(
    window.innerHeight.toString(),
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight.toString());
    };

    window.addEventListener(WINDOW_RESIZE, handleResize);

    return () => {
      window.removeEventListener(WINDOW_RESIZE, handleResize);
    };
  }, []);

  return (
    <>
      <CategoryProductsContainer $height={windowHeight} id={HOME_INF_POS_NAME}>
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

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const HomeInfScrollWrap = styled.div`
  padding: 10px 0 100% 0;
  width: 82%;
`;

export default CategoryProducts;
