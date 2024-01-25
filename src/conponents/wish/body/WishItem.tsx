import React from 'react';
import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import { deleteWish } from '../../../services/wish/deleteWish';
import { useSetRecoilState } from 'recoil';
import { wishProductListAtom } from '../../../states/wishAtom';
import WishImg from './WishImg';
import OutlineButton from '../../OutlineButton';

interface WishItemProps {
  brandName?: string;
  wishId: number;
  productName?: string;
  price?: number;
  starRate?: number;
  totalReviewCount?: number;
  productCode?: number;
  imgPath?: string;
}

const WishItem: React.FC<WishItemProps> = ({
  brandName,
  wishId,
  price,
  productCode,
  productName,
  starRate,
  totalReviewCount,
  imgPath,
}) => {
  const setWishProductList = useSetRecoilState(wishProductListAtom);
  const imgItemStyle: React.CSSProperties = {
    width: '20%',
  };

  const deleteBtnOnClick = () => {
    if (productCode)
      deleteWish(productCode).then(() => {
        setWishProductList((prevItemList) => {
          const prevItemListTemp = [...prevItemList];
          prevItemListTemp.splice(wishId, 1);
          return prevItemListTemp;
        });
      });
  };

  const OutlineButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    width: 'auto',
    padding: '0px 10px',
  };
  return (
    <WishItemContainer>
      <WishImg style={imgItemStyle} imgPath={imgPath} />
      <ProductInfoBox>
        <BrandName>{brandName}</BrandName>
        <ProductName>{productName}</ProductName>
        <PriceAndRatingAndDeleteBtnBox>
          <PriceAndRatingBox>
            <PriceText>{price?.toLocaleString()}원</PriceText>
            <RatingBox>
              <Star />
              <RatingCount>{starRate}</RatingCount>
              <TotalReviewCount>({totalReviewCount})</TotalReviewCount>
            </RatingBox>
          </PriceAndRatingBox>
          <OutlineButton
            style={OutlineButtonStyle}
            border="Grey4"
            font="Body1"
            color="Grey8"
            onClick={() => deleteBtnOnClick()}
          >
            삭제
          </OutlineButton>
        </PriceAndRatingAndDeleteBtnBox>
      </ProductInfoBox>
    </WishItemContainer>
  );
};

const WishItemContainer = styled.div`
  display: flex;
  padding: 10px ${({ theme }) => theme.paddings.base};
  height: fit-content;
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

const ProductInfoBox = styled.div`
  padding-left: 33px;
  width: 70%;
  height: fit-content;
  position: relative;
`;
const BrandName = styled.span`
  font: ${({ theme }) => theme.fontSizes.Subhead1};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.grey.Grey5};
`;
const ProductName = styled.p`
  font: ${({ theme }) => theme.fontSizes.Body2};
  font-size: 16px;
  color: ${({ theme }) => theme.grey.Grey7};
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 표시할 줄 수 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceAndRatingAndDeleteBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 70px;
`;

const PriceAndRatingBox = styled.div`
  display: flex;
`;
const PriceText = styled.span`
  margin-right: 5px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: black;
`;
const RatingBox = styled.div`
  display: flex;
  align-items: center;
`;
const Star = styled(BsStarFill)`
  font: ${({ theme }) => theme.fontSizes.Body1};
  color: ${({ theme }) => theme.subColor.Yellow3};
`;
const RatingCount = styled.span`
  margin: 0 0 0 1px;
  font: ${({ theme }) => theme.fontSizes.Body1};
  font-weight: 700;
  color: ${({ theme }) => theme.grey.Grey6};
`;
const TotalReviewCount = styled(RatingCount)`
  font-weight: 500;
`;

export default WishItem;
