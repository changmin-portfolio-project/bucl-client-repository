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
import { PAGE_NUM } from '../const/Pagenation';
import {
  categoryIdByCategoriesAtom,
  pageNumByCategoriesAtom,
  productListByCategoriesAtom,
} from '../states/categoryAtom';

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
  const prevCategoryId = useRef(categoryId);
  const [pageNum, setPageNum] = useRecoilState(pageNumAtom);

  const categoryIdByCategories = useRecoilValue(categoryIdByCategoriesAtom);
  const prevCategoryIdByCategories = useRef(categoryIdByCategories);
  const [pageNumByCategories, setPageNumByCategories] = useRecoilState(
    pageNumByCategoriesAtom,
  );

  const [ref, inView] = useInView();

  const setHomeList = useSetRecoilState(productListAtom);
  const setList = useSetRecoilState(productListByCategoriesAtom);

  const callback = () => {
    if (getHomeCategoryByProductList) {
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
    } else if (getCategoryByProductList) {
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
    }
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

const ScrollBottomContainer = styled.div``;

export default ProductInfiniteScroll;
