import React from 'react';
import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import { deleteWish } from '../../../services/wish/deleteWish';
import { useSetRecoilState } from 'recoil';
import { wishProductListAtom } from '../../../states/wishAtom';
import WishImg from './WishImg';
import OutlineButton from '../../OutlineButton';
import AppLink from '../../AppLink';
import { PRODUCT_PATH } from '../../../const/PathVar';
import theme from '../../../style/theme';

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
    width: '30%',
  };

  const deleteBtnOnClick = () => {
    if (productCode)
      deleteWish(productCode)
        .then(() => {
          setWishProductList((prevItemList) => {
            const prevItemListTemp = [...prevItemList];
            prevItemListTemp.splice(wishId, 1);
            return prevItemListTemp;
          });
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
  };

  const OutlineButtonStyle: React.CSSProperties = {
    border: 'none',
    width: 'auto',
    padding: '0px 10px',
  };
  return (
    <WishItemContainer>
      <WishImg style={imgItemStyle} imgPath={imgPath}></WishImg>

      <ProductInfoBox>
        <BrandName>{brandName}</BrandName>
        <AppLink to={`${PRODUCT_PATH}/${productCode}`}>
          <ProductName>{productName}</ProductName>
        </AppLink>
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
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill={theme.subColor.Yellow5}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
                stroke={theme.mainColor.Orange5}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
  padding-left: 15px;
  width: 70%;
  height: fit-content;
  position: relative;
  margin-top: 2px;
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
  -webkit-line-clamp: 1; /* 표시할 줄 수 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 6px;
`;

const PriceAndRatingAndDeleteBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
