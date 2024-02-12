import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  categoryIdAtom,
  pageNumAtom,
  productListAtom,
} from '../states/productAtom';
import { useInView } from 'react-intersection-observer';
import { getHomeCategoryByProductList } from '../services/home/getCategoryProductList';
import { PAGE_NUM } from '../const/Pagenation';
import { categoryIdByCategoriesAtom } from '../states/categoryAtom';

const HomeInfiniteScroll: React.FC = () => {
  const categoryId = useRecoilValue(categoryIdAtom);
  const prevCategoryId = useRef(categoryId);
  const [pageNum, setPageNum] = useRecoilState(pageNumAtom);

  const categoryIdByCategories = useRecoilValue(categoryIdByCategoriesAtom);
  const prevCategoryIdByCategories = useRef(categoryIdByCategories);

  const [ref, inView] = useInView();

  const setHomeList = useSetRecoilState(productListAtom);

  const callback = () => {
    getHomeCategoryByProductList(
      categoryId,
      categoryId !== prevCategoryId.current ? PAGE_NUM : pageNum,
    )
      .then((res) => {
        if (categoryId !== prevCategoryId.current) {
          setHomeList(res);
          setPageNum(PAGE_NUM + 1);
          prevCategoryId.current = categoryId; // 이전 categoryId 업데이트
          window.scrollTo({ top: 0 });
        } else {
          if (res.length != 0) {
            setHomeList((prev) => [...prev, ...res]);
            setPageNum((prev) => prev + 1);
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
      categoryId !== prevCategoryId.current ||
      categoryIdByCategories != prevCategoryIdByCategories.current ||
      inView
    ) {
      callback();
    }
  }, [inView, categoryId, categoryIdByCategories]);

  return <ScrollBottomContainer ref={ref}></ScrollBottomContainer>;
};

const ScrollBottomContainer = styled.div`
  margin: 0px auto;
`;

export default HomeInfiniteScroll;
