import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isAgreedAtom } from '../../states/affiliates';

const Footer: React.FC = () => {
  const setIsAgreed = useSetRecoilState(isAgreedAtom);

  return (
    <FooterContainer>
      <AgreeBtn onClick={() => setIsAgreed(true)}>
        동의하고 판매링크 생성하기
      </AgreeBtn>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: fixed;
  max-width: 600px;
  z-index: 999;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 10px 0 40px 0;
  width: 100%;
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.grey.Grey2};
`;

const AgreeBtn = styled.button`
  padding: 10px 0;
  width: calc(100% - (${({ theme }) => theme.paddings.base}*2));
  background-color: ${({ theme }) => theme.mainColor.Orange5};
  border: none;
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: white;
`;

export default Footer;
