/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReviewImgItem from '../../ReviewImgItem';
import { useParams } from 'react-router-dom';
import { getProductInfo } from '../../../services/productDetail/getProductInfo';

const Preview: React.FC = () => {
  const param = useParams();
  const ReviewImgItemStyle: React.CSSProperties = {
    width: '20%',
  };
  type Information = { name: string; description: string };
  const [info, setInformation] = useState<Information | null>(null);

  const [productImg, setProductImg] = useState('');
  const [brandName, setBrandName] = useState('');
  const [productName, setProductName] = useState('');
  // const [deliveryDate, setDeliveryDate] = useState('');

  useEffect(() => {
    if (param.product_code) {
      getProductInfo(param.product_code).then((res): void => {
        setBrandName(res.data.brandName);
        setProductName(res.data.name);
        setProductImg(res.data.imagePaths[0]);
      });
    }
  }, []);
  return (
    <PreviewContainer>
      <ReviewImgItem imgPath={productImg} style={ReviewImgItemStyle} />
      <InfoBox>
        <BrandNameContentsBox>
          <BrandName>{brandName}</BrandName>
          <ContentsText>{productName}</ContentsText>
        </BrandNameContentsBox>
        <DeliveryCompletionDate>배송 완료일: 2023-11-16</DeliveryCompletionDate>
      </InfoBox>
    </PreviewContainer>
  );
};

const PreviewContainer = styled.section`
  display: flex;
  margin: 15px 0;
  padding: 7px;
  width: calc(100% - 14px);
  border: 1px solid ${({ theme }) => theme.grey.Grey2};
  border-radius: 4px;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 7px;
  width: 75%;
`;
const BrandNameContentsBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const BrandName = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body1};
  color: ${({ theme }) => theme.grey.Grey6};
`;
const ContentsText = styled.p`
  width: 100%;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey7};
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 표시할 줄 수 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DeliveryCompletionDate = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body1};
  color: ${({ theme }) => theme.grey.Grey5};
`;

export default Preview;
