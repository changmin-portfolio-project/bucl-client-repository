import React from 'react';
import HeaderLayout from '../layout/HeaderLayout';
import styled from 'styled-components';
import PrevBtn from '../PrevBtn';
import { isAgreedAtom } from '../../states/affiliates';
import { useRecoilValue } from 'recoil';

const Header: React.FC = () => {
  const isAgreed = useRecoilValue(isAgreedAtom);

  const HeaderLayoutStyle: React.CSSProperties = {
    alignItems: 'flex-end',
    justifyContent: 'center',
  };
  return (
    <HeaderLayout style={HeaderLayoutStyle}>
      <Title>
        <PrevBtn />
        {!isAgreed && '홍보 주의사항'}
      </Title>
    </HeaderLayout>
  );
};

const Title = styled.h2`
  text-align: center;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
`;

export default Header;
