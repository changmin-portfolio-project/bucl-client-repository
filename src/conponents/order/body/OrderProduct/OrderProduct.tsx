import React from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

const OrderProduct: React.FC = () => {
  const [cookies] = useCookies([
    'proctImg',
    'proctNom',
    'proctOptNom',
    'proctBrn',
  ]);
  return (
    <StyledOrderPointContainer>
      <PointInputContainer>
        <OrderProductImg src={cookies.proctImg} />
        <PointInputLeftItem>
          <BrandName>{cookies.proctBrn}</BrandName>
          <ProductName>{cookies.proctNom}</ProductName>
          <ProductOption>{cookies.proctOptNom}</ProductOption>
        </PointInputLeftItem>
      </PointInputContainer>
    </StyledOrderPointContainer>
  );
};

const OrderProductImg = styled.img`
  width: 60px;
  height: 60px;
  flex-shrink: 0;

  border-radius: 4px;
`;

const StyledOrderPointContainer = styled.div`
  padding: 0 20px 20px 20px;
  border-bottom: 1px solid #eaecef;
`;

const PointInputContainer = styled.div`
  display: flex;
  justify-content: left;
`;

const PointInputLeftItem = styled.div`
  margin-left: 11px;
`;

const ProductName = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body2};
  padding: 1px 0 6px 0;
`;

const BrandName = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body1};
`;

const ProductOption = styled.div`
  font: ${({ theme }) => theme.fontSizes.Body1};
  color: var(--grey-6, #858e96);
  border-radius: 4px;
  background: var(--grey-1, #f1f3f5);
  padding: 4.5px 0 4.5px 7px;
`;

export default OrderProduct;
