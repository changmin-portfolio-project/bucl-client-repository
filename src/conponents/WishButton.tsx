import React from 'react';
import styled from 'styled-components';
import { postWishes } from '../services/wish/postWishes';
import { deleteWish } from '../services/wish/deleteWish';

interface WishBtnComponentProps {
  productCode: number;
  wished: boolean;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
  wishId?: number;
}

const WishButton: React.FC<WishBtnComponentProps> = ({
  productCode,
  style,
  wished,
  svgStyle,
  wishId,
}) => {
  const wishBtnOnClick = (wishId: number | undefined, wished: boolean) => {
    wished ? deleteWish(productCode) : postWishes({ productCode: productCode });
  };

  console.log(wishId, productCode);

  return (
    <WishBtnContainer>
      {/* <WishCheckBox
        type="checkbox"
        className="wish-checkbox"
        id={`wish-${productCode}`}
      /> */}
      {wished ? (
        <WishBtn onClick={() => wishBtnOnClick(wishId, wished)} style={style}>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={svgStyle}
          >
            <g clipPath="url(#clip0_1693_1347)">
              <path
                strokeWidth="0.8"
                d="M11.2511 2.30494C10.9957 2.04944 10.6925 1.84676 10.3588 1.70848C10.0251 1.5702 9.66736 1.49902 9.30611 1.49902C8.94487 1.49902 8.58717 1.5702 8.25344 1.70848C7.91971 1.84676 7.61649 2.04944 7.36111 2.30494L6.83111 2.83494L6.30111 2.30494C5.78527 1.78909 5.08563 1.49929 4.35611 1.49929C3.6266 1.49929 2.92696 1.78909 2.41111 2.30494C1.89527 2.82078 1.60547 3.52042 1.60547 4.24994C1.60547 4.97945 1.89527 5.67909 2.41111 6.19494L2.94111 6.72494L6.83111 10.6149L10.7211 6.72494L11.2511 6.19494C11.5066 5.93956 11.7093 5.63634 11.8476 5.30261C11.9859 4.96888 12.057 4.61118 12.057 4.24994C12.057 3.88869 11.9859 3.53099 11.8476 3.19726C11.7093 2.86353 11.5066 2.56031 11.2511 2.30494Z"
                fill="#FFAD0D"
                stroke="#FF8000"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </WishBtn>
      ) : (
        <WishBtn onClick={() => wishBtnOnClick(wishId, wished)} style={style}>
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
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </WishBtn>
      )}
    </WishBtnContainer>
  );
};

const WishBtnContainer = styled.div``;

const WishBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.grey.Grey5};
  cursor: pointer;
`;

export default WishButton;
