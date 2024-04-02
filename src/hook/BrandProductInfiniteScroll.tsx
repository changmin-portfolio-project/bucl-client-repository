import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import {
  pageNumByCategoriesAtom,
  productListByCategoriesAtom,
} from '../states/categoryAtom';
import { getProductListByBrand } from '../services/productBrand/getBrandProductList';
import { useParams } from 'react-router-dom';

const BrandProductInfiniteScroll: React.FC = () => {
  const param = useParams();
  const marketId: number =
    param.market_code !== undefined ? parseInt(param.market_code) : 0;

  const [pageNumByCategories, setPageNumByCategories] = useRecoilState(
    pageNumByCategoriesAtom,
  );

  const [ref, inView] = useInView();

  const setList = useSetRecoilState(productListByCategoriesAtom);

  const callback = () => {
    getProductListByBrand(marketId, pageNumByCategories)
      .then((res) => {
        if (res.length != 0) {
          setList((prev) => [...prev, ...res]);
          setPageNumByCategories((prev) => prev + 1);
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    // categoryId가 변경되고 이전 categoryId와 다를 때에만 실행
    if (
      // categoryIdByCategories != prevCategoryIdByCategories.current ||
      inView
    ) {
      callback();
    }
  }, [inView]);

  return <ScrollBottomContainer ref={ref}></ScrollBottomContainer>;
};

const ScrollBottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default BrandProductInfiniteScroll;
