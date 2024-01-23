import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { productDetailAtom } from '../../../states/productDetailAtom';

const ProductDetailInfo: React.FC = () => {
  const productDetail = useRecoilValue(productDetailAtom);
  return (
    <ProductDetailInfoContainer>
      <TitleAllBtnBox>
        <TitleText>상품 정보</TitleText>
      </TitleAllBtnBox>
      <ImagesBox>
        {productDetail.detailImagePaths?.map((v, i) => (
          <ProductDetailImg src={v} key={i} />
        ))}
      </ImagesBox>
    </ProductDetailInfoContainer>
  );
};

const ProductDetailInfoContainer = styled.div`
  border-bottom: 6px solid ${({ theme }) => theme.grey.Grey2};
`;

const TitleAllBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.paddings.small + ' ' + theme.paddings.base};
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;
const TitleText = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body3};
`;

const ImagesBox = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;
const ProductDetailImg = styled.img`
  vertical-align: bottom;
`;

export default ProductDetailInfo;
