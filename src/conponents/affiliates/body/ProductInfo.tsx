import React from 'react';
import styled from 'styled-components';
import SaveImgButton from './SaveImgButton';
import Deadline from '../../Deadline';
import LinkCopyButton from './LinkCopyButton';
import { useRecoilValue } from 'recoil';
import { salesInfoAtom } from '../../../states/affiliates';

const ProductInfo: React.FC = () => {
  const salesInfo = useRecoilValue(salesInfoAtom);
  const DeadlineStyle: React.CSSProperties = {
    borderRadius: '8px 8px 0 0',
  };
  return (
    <ProductInfoContainer>
      <Title>판매 링크 생성 완료!</Title>
      <ProductItem $imageUrl={salesInfo.imagePath[0]}>
        <Deadline style={DeadlineStyle} spanFont={'Label'} deadline={''} />
      </ProductItem>
      <SaveImgButton />
      <BrandName>{salesInfo.brandName}</BrandName>
      <ProductName>{salesInfo.name}</ProductName>
      <RewardBox>
        <RewardTitle>리워드</RewardTitle>
        <RewardSum>{salesInfo.reward?.toLocaleString()}P</RewardSum>
      </RewardBox>
      <LinkCopyButton />
    </ProductInfoContainer>
  );
};

const ProductInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px ${({ theme }) => theme.paddings.base};
  border-bottom: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

const Title = styled.p`
  padding-bottom: 15px;
  font: ${({ theme }) => theme.fontSizes.Subhead3};
  color: ${({ theme }) => theme.mainColor.Orange5};
`;
const ProductItem = styled.div<{ $imageUrl: string }>`
  position: relative;
  margin-bottom: 10px;
  width: 65%;
  aspect-ratio: 1/1;
  border-radius: 8px;
  background-image: url('${(props) => props.$imageUrl}');
  background-size: 100%;
`;
const BrandName = styled.p`
  font: ${({ theme }) => theme.fontSizes.Body1};
  font-weight: 700;
  color: ${({ theme }) => theme.grey.Grey5};
`;
const ProductName = styled.p`
  width: calc(100% - (${({ theme }) => theme.paddings.base}*2));
  font: ${({ theme }) => theme.fontSizes.Body3};
  color: ${({ theme }) => theme.grey.Grey7};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

const RewardBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
`;
const RewardTitle = styled.span`
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: ${({ theme }) => theme.mainColor.Orange5};
`;
const RewardSum = styled.span`
  margin: 0 5px;
  font: ${({ theme }) => theme.fontSizes.Subhead4};
`;

export default ProductInfo;
