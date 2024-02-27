/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import ReviewImgItem from '../../ReviewImgItem';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { postReviewProductInfoAtom } from '../../../states/postReviewAtom';
import { convertDtStrToDStr } from '../../../utils/DateTimeUtil';

const Preview: React.FC = () => {
  const navigate = useNavigate();
  const param = useParams();
  const ReviewImgItemStyle: React.CSSProperties = {
    width: '20%',
  };
  type Information = { name: string; description: string };
  const [info, setInformation] = useState<Information | null>(null);

  const productInfo = useRecoilValue(postReviewProductInfoAtom);
  // const [deliveryDate, setDeliveryDate] = useState('');

  return (
    <PreviewContainer>
      <ReviewImgItem
        imgPath={productInfo.imagePath}
        style={ReviewImgItemStyle}
      />
      <InfoBox>
        <BrandNameContentsBox>
          <BrandName>{productInfo.brandName}</BrandName>
          <ContentsText>{productInfo.name}</ContentsText>
        </BrandNameContentsBox>
        <DeliveryCompletionDate>
          {convertDtStrToDStr(
            productInfo.createdAt ?? '날짜 표기 할 수 없습니다.',
          )}
        </DeliveryCompletionDate>
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
