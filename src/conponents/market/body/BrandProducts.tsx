import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  pageNumByCategoriesAtom,
  productListByCategoriesAtom,
} from '../../../states/categoryAtom';
import ProductItem from '../../category/body/ProductItem';
import BrandProductInfiniteScroll from '../../../hook/BrandProductInfiniteScroll';
import { PAGE_NUM } from '../../../const/Pagenation';

const BrandProducts: React.FC = () => {
  const brandProductlist = useRecoilValue(productListByCategoriesAtom);
  const setPageNumByCategories = useSetRecoilState(pageNumByCategoriesAtom);

  useEffect(() => {
    setPageNumByCategories(PAGE_NUM);
  }, []);
  return (
    <>
      <CategoryProductsContainer>
        {Array.isArray(brandProductlist) &&
          brandProductlist.map((v, i) => (
            <ProductItem key={i} data={v} uniqueKey={i} />
          ))}
      </CategoryProductsContainer>
      <div>
        <BrandProductInfiniteScroll />
      </div>
    </>
  );
};

const CategoryProductsContainer = styled.div`
  padding: 10px 4px 0px 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default BrandProducts;
