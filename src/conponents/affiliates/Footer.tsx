import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isAgreedAtom } from '../../states/affiliates';
import ColoredButton from '../ColoredButton';

const Footer: React.FC = () => {
  const setIsAgreed = useSetRecoilState(isAgreedAtom);

  return (
    <FooterContainer>
      <ColoredButton
        onClick={() => setIsAgreed(true)}
        font="Subhead2"
        color="white"
      >
        동의하고 판매링크 생성하기
      </ColoredButton>
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
  padding: 10px ${({ theme }) => theme.paddings.base} 40px
    ${({ theme }) => theme.paddings.base};
  width: calc(100% - (${({ theme }) => theme.paddings.base}*2));
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.grey.Grey2};
  button {
    width: calc(100% - (${({ theme }) => theme.paddings.base}*2));
  }
`;

export default Footer;
