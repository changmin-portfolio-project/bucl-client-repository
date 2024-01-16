import React from 'react';
import styled from 'styled-components';
import Reward from './Reward';
import { Link } from 'react-router-dom';
import DiscountRateCalculation from '../../../hook/DiscountRateCalculation';
import { HomeProduct } from '../../../services/home/getCategoryProductList';
import Attend from '../../Attend';
import Deadline from '../../Deadline';
import theme from '../../../style/theme';
import HomeWishBtn from './HomeWishBtn';
import { saveBeforePos } from '../../../utils/HomeUtil';

interface ProductComponentProps {
  data: HomeProduct;
  uniqueKey: number;
}

const ProductItem: React.FC<ProductComponentProps> = ({ data, uniqueKey }) => {
  const discountPercentage: number = DiscountRateCalculation({
    consumerPrice: data.consumerPrice,
    salePrice: data.salePrice,
  });

  const wishBtnStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '20px',
    right: '15px',
    padding: '5px',
    width: '25px',
    height: '25px',
    backgroundColor: 'white',
    borderRadius: '50%',
    border: `2px solid ${theme.grey.Grey3}`,
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
      <Deadline deadline={data.deadline} />
      <Reward reward={data.reward} />
      <ProductImgBox onClick={saveBeforePos}>
        <Link to={`/products/${data.productCode}`}>
          <ProductImgBox>
            <ProductImg $url={data.imagePath} />

            <Attend style={AttendStyle} ordNum={data.ordNum} />
            <ProductInfoBox>
              <BrandName>{data.brandName}</BrandName>
              <ProductName>{data.name}</ProductName>
              <PriceBox>
                <DiscountRate>{discountPercentage.toFixed(0)}%</DiscountRate>
                <DiscountPrice>
                  {data.salePrice?.toLocaleString()}원
                </DiscountPrice>
                <OriginalPrice>
                  {data.consumerPrice?.toLocaleString()}원
                </OriginalPrice>
              </PriceBox>
            </ProductInfoBox>
          </ProductImgBox>
        </Link>
        <HomeWishBtn
          wishId={uniqueKey}
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
  scroll-snap-align: start;
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
// const ProductImg = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 0 0 12px 12px;
// `;

const ProductImg = styled.div<{ $url: string }>`
  width: 100%;
  height: 100%;
  border-radius: 0 0 12px 12px;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0) 55.73%, rgba(0, 0, 0, 0.6) 93.75%),
    url(${(props) => props.$url}),
    lightgray 50% / cover no-repeat;
  background-size: cover;
  background-position: center;
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
  margin-bottom: 5px;
`;
const ProductName = styled.p`
  margin-bottom: 5px;
  width: 75%;
  font: ${({ theme }) => theme.fontSizes.Body3};
  font-weight: 500;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 표시할 줄 수 */
  -webkit-box-orient: vertical;
`;

const PriceBox = styled.div`
  margin-top: 10px;
`;
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
