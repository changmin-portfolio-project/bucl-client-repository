import React from 'react';
import styled from 'styled-components';
import Reward from './Reward';
import { Link } from 'react-router-dom';
import DiscountRateCalculation from '../../../hook/DiscountRateCalculation';
import { HomeProduct } from '../../../services/home/getCategoryProductList';
import Attend from '../../Attend';
import Deadline from '../../Deadline';
import WishBtn from '../../WishBtn';

interface ProductComponentProps {
  data: HomeProduct;
}

const ProductItem: React.FC<ProductComponentProps> = ({ data }) => {
  const discountPercentage: number = DiscountRateCalculation({
    consumerPrice: data.consumerPrice,
    salePrice: data.salePrice,
  });

  const wishBtnStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '20px',
    right: '15px',
    padding: '5px',
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    borderRadius: '50%',
  };
  const svgStyle: React.CSSProperties = {
    width: '90%',
    height: '80%',
  };
  const AttendStyle: React.CSSProperties = {
    position: 'absolute',
    top: '15px',
    right: '15px',
  };

  return (
    <ProductContainer>
      <Deadline />
      <Reward reward={data.reward} />
      <ProductImgBox>
        <Link to={`/products/${data.productCode}`}>
          <ProductImg src={data.imagePath} />
        </Link>
        <Attend style={AttendStyle} />
        <ProductInfoBox>
          <BrandName>{data.brandName}</BrandName>
          <ProductName>{data.name}</ProductName>
          <PriceBox>
            <DiscountRate>{discountPercentage.toFixed(0)}%</DiscountRate>
            <DiscountPrice>{data.salePrice?.toLocaleString()}원</DiscountPrice>
            <OriginalPrice>
              {data.consumerPrice?.toLocaleString()}원
            </OriginalPrice>
          </PriceBox>
        </ProductInfoBox>
        <WishBtn
          productCode={data.productCode}
          wished={data.wished}
          style={wishBtnStyle}
          svgStyle={svgStyle}
        />
      </ProductImgBox>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  padding: 15px 0;
  width: 85%;
  letter-spacing: -0.6px;
`;
const ProductImgBox = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 0.675/0.9;
  color: white;
  a {
    position: relative;
  }
`;
const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0 0 12px 12px;
`;

const ProductInfoBox = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 100%;
`;
const BrandName = styled.p`
  padding: 0;
  font: ${({ theme }) => theme.fontSizes.Body2};
  font-weight: 700;
`;
const ProductName = styled.p`
  margin-bottom: 5px;
  width: 75%;
  font: ${({ theme }) => theme.fontSizes.Body3};
  font-weight: 500;
  line-height: 19.6px;
  -webkit-line-clamp: 2; /* 표시할 줄 수 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceBox = styled.div``;
const DiscountRate = styled.span`
  padding-right: 8px;
  font: ${({ theme }) => theme.fontSizes.Subhead4};
  font-weight: 700;
  color: ${({ theme }) => theme.mainColor.Orange5};
  line-height: 25.2px;
`;
const DiscountPrice = styled(DiscountRate)`
  color: white;
`;
const OriginalPrice = styled(DiscountRate)`
  font: ${({ theme }) => theme.fontSizes.Body2};
  text-decoration: line-through;
  line-height: 18px;
  color: ${({ theme }) => theme.grey.Grey6};
`;

export default ProductItem;
