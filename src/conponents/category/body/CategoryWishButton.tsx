import React from 'react';
import styled from 'styled-components';
import { postWishes } from '../../../services/wish/postWishes';
import { useSetRecoilState } from 'recoil';
import { productListByCategoriesAtom } from '../../../states/categoryAtom';
import theme from '../../../style/theme';
import { deleteWish } from '../../../services/wish/deleteWish';

interface CategoryWishButtonComponentProps {
  productCode: number;
  wished: boolean;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  wishId?: number;
}

const CategoryWishButton: React.FC<CategoryWishButtonComponentProps> = ({
  productCode,
  wished,
  style,
  svgStyle,
  wishId,
}) => {
  const setCategoryProductlist = useSetRecoilState(productListByCategoriesAtom);
  const wishBtnOnClick = (wishId: number | undefined, wished: boolean) => {
    if (wishId !== undefined) {
      wished
        ? deleteWish(productCode)
            .then(() => {
              setCategoryProductlist((prevItemList) =>
                prevItemList.map((prevItem, i) =>
                  i === wishId ? { ...prevItem, wished: !wished } : prevItem,
                ),
              );
            })
            .catch((error) => {
              alert(error.response.data.message);
            })
        : postWishes({ productCode: productCode })
            .then(() => {
              setCategoryProductlist((prevItemList) =>
                prevItemList.map((prevItem, i) =>
                  i === wishId ? { ...prevItem, wished: !wished } : prevItem,
                ),
              );
            })
            .catch((error) => {
              alert(error.response.data.message);
            });
    }
  };

  return (
    <WishBtnContainer>
      <WishCheckBox type="checkbox" />

      <WishButton onClick={() => wishBtnOnClick(wishId, wished)} style={style}>
        {wished ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={theme.subColor.Yellow5}
            xmlns="http://www.w3.org/2000/svg"
            style={svgStyle}
          >
            <path
              d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
              stroke={theme.mainColor.Orange5}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="rgba(255,255,255,0.8)"
            xmlns="http://www.w3.org/2000/svg"
            style={svgStyle}
          >
            <path
              d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
              stroke="gray"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </WishButton>
    </WishBtnContainer>
  );
};

const WishBtnContainer = styled.div``;

const WishCheckBox = styled.input`
  display: none;
`;
const WishButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.grey.Grey5};
  cursor: pointer;
`;

export default CategoryWishButton;
