import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  categoryIdAtom,
  pageNumAtom,
  productListAtom,
} from '../states/productAtom';
import { useInView } from 'react-intersection-observer';
import { HomeProduct } from '../services/home/getCategoryProductList';
import { Product } from '../services/category/getCategoryProductList';

interface ProductInfiniteScrollProps {
  getHomeCategoryByProductList?: (
    categoryId: number,
    pageNum: number,
  ) => Promise<HomeProduct[]>;
  getCategoryByProductList?: (
    categoryId: number,
    pageNum: number,
  ) => Promise<Product[]>;
}

const ProductInfiniteScroll: React.FC<ProductInfiniteScrollProps> = ({
  getHomeCategoryByProductList,
  getCategoryByProductList,
}) => {
  const categoryId = useRecoilValue(categoryIdAtom);
  const setHomeList = useSetRecoilState(productListAtom);
  const [pageNum, setPageNum] = useRecoilState(pageNumAtom);
  const [ref, inView] = useInView();
  const prevCategoryId = useRef(categoryId);

  const callback = () => {
    if (getHomeCategoryByProductList) {
      getHomeCategoryByProductList(
        categoryId,
        categoryId !== prevCategoryId.current ? 1 : pageNum,
      )
        .then((res) => {
          if (categoryId !== prevCategoryId.current) {
            setHomeList(res);
            setPageNum(2);
            prevCategoryId.current = categoryId; // 이전 categoryId 업데이트
            window.scrollTo({ top: 0 });
          } else {
            setHomeList((prev) => [...prev, ...res]);
            setPageNum((prev) => prev + 1);
          }
        })
        .catch((err) => {
          throw err;
        });
    } else if (getCategoryByProductList) console.log('category');
  };
  useEffect(() => {
    // categoryId가 변경되고 이전 categoryId와 다를 때에만 실행
    if (categoryId !== prevCategoryId.current || inView) {
      console.log(inView, '무한 스크롤 요청 🎃'); // 실행할 함수
      callback();
    }
  }, [inView, categoryId]);

  return <ScrollBottomContainer ref={ref}>GHOOOOOOOOO</ScrollBottomContainer>;
};

const ScrollBottomContainer = styled.div``;

export default ProductInfiniteScroll;
