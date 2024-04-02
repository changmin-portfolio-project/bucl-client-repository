import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { getCategoryByProductList } from '../services/category/getCategoryProductList';
import { PAGE_NUM } from '../const/Pagenation';
import {
  categoryIdByCategoriesAtom,
  pageNumByCategoriesAtom,
  productListByCategoriesAtom,
} from '../states/categoryAtom';

const CategoryInfiniteScroll: React.FC = () => {
  const categoryIdByCategories = useRecoilValue(categoryIdByCategoriesAtom);
  const prevCategoryIdByCategories = useRef(categoryIdByCategories);
  const [pageNumByCategories, setPageNumByCategories] = useRecoilState(
    pageNumByCategoriesAtom,
  );

  const [ref, inView] = useInView();

  const setList = useSetRecoilState(productListByCategoriesAtom);

  const callback = () => {
    getCategoryByProductList(
      categoryIdByCategories,
      categoryIdByCategories !== prevCategoryIdByCategories.current
        ? PAGE_NUM
        : pageNumByCategories,
    )
      .then((res) => {
        if (categoryIdByCategories !== prevCategoryIdByCategories.current) {
          setList(res);
          setPageNumByCategories(PAGE_NUM + 1);
          prevCategoryIdByCategories.current = categoryIdByCategories; // 이전 categoryId 업데이트
          window.scrollTo({ top: 0 });
        } else {
          if (res.length != 0) {
            setList((prev) => [...prev, ...res]);
            setPageNumByCategories((prev) => prev + 1);
          }
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
  }, [inView, categoryIdByCategories]);

  return <ScrollBottomContainer ref={ref}></ScrollBottomContainer>;
};

const ScrollBottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default CategoryInfiniteScroll;
