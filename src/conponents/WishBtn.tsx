import React from 'react';
import styled from 'styled-components';
import { postWishes } from '../services/wish/postWishes';
import { getWishList } from '../services/wish/getWishList';
import { useRecoilState } from 'recoil';
import { wishListAtom } from '../states/productAtom';
import { deleteWish } from '../services/wish/deleteWish';

interface WishBtnComponentProps {
  productCode: number;
  wished: boolean;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
}

const WishBtn: React.FC<WishBtnComponentProps> = ({ productCode, style }) => {
  const [wishList, setWishList] = useRecoilState(wishListAtom);
  const wishBtnOnClick = () => {
    if (wishList.map((v) => v.productCode).includes(productCode))
      deleteWish(productCode).then(() => {
        getWishList().then((res) => {
          setWishList(res.data);
          return null;
        });
      });
    else
      postWishes().then(() => {
        getWishList().then((res) => {
          setWishList(res.data);
          return null;
        });
      });
  };

  return (
    <WishBtnContainer id="lemon">
      {wishList.map((v) => v.productCode).includes(productCode) ? (
        <WishButton onClick={wishBtnOnClick} style={style}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1693_1347)">
              <path
                d="M11.2511 2.30494C10.9957 2.04944 10.6925 1.84676 10.3588 1.70848C10.0251 1.5702 9.66736 1.49902 9.30611 1.49902C8.94487 1.49902 8.58717 1.5702 8.25344 1.70848C7.91971 1.84676 7.61649 2.04944 7.36111 2.30494L6.83111 2.83494L6.30111 2.30494C5.78527 1.78909 5.08563 1.49929 4.35611 1.49929C3.6266 1.49929 2.92696 1.78909 2.41111 2.30494C1.89527 2.82078 1.60547 3.52042 1.60547 4.24994C1.60547 4.97945 1.89527 5.67909 2.41111 6.19494L2.94111 6.72494L6.83111 10.6149L10.7211 6.72494L11.2511 6.19494C11.5066 5.93956 11.7093 5.63634 11.8476 5.30261C11.9859 4.96888 12.057 4.61118 12.057 4.24994C12.057 3.88869 11.9859 3.53099 11.8476 3.19726C11.7093 2.86353 11.5066 2.56031 11.2511 2.30494Z"
                fill="#FFAD0D"
                stroke="#FF8000"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </WishButton>
      ) : (
        <WishButton onClick={wishBtnOnClick} style={style}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1693_1653)">
              <path
                d="M11.2511 2.30494C10.9957 2.04944 10.6925 1.84676 10.3588 1.70848C10.0251 1.5702 9.66736 1.49902 9.30611 1.49902C8.94487 1.49902 8.58717 1.5702 8.25344 1.70848C7.91971 1.84676 7.61649 2.04944 7.36111 2.30494L6.83111 2.83494L6.30111 2.30494C5.78527 1.78909 5.08563 1.49929 4.35611 1.49929C3.6266 1.49929 2.92696 1.78909 2.41111 2.30494C1.89527 2.82078 1.60547 3.52042 1.60547 4.24994C1.60547 4.97945 1.89527 5.67909 2.41111 6.19494L2.94111 6.72494L6.83111 10.6149L10.7211 6.72494L11.2511 6.19494C11.5066 5.93956 11.7093 5.63634 11.8476 5.30261C11.9859 4.96888 12.057 4.61118 12.057 4.24994C12.057 3.88869 11.9859 3.53099 11.8476 3.19726C11.7093 2.86353 11.5066 2.56031 11.2511 2.30494V2.30494Z"
                stroke="#ACB5BD"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </WishButton>
      )}
    </WishBtnContainer>
  );
};

const WishBtnContainer = styled.div``;

const WishButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.grey.Grey5};
  cursor: pointer;
  svg {
    width: 100%;
    height: fit-content;
    margin-right: -1px;
    margin-bottom: -5.5px;
  }
`;

export default WishBtn;
