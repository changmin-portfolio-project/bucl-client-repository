import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Deadline from '../Deadline';
import WishButton from '../WishButton';
import OptionChoose from './footer/OptionChoose';
import { isActivePopUp } from '../../utils/PopUpUtil';
import OutlineButton from '../OutlineButton';
import { Link, useParams } from 'react-router-dom';
import ColoredButton from '../ColoredButton';
import { useRecoilValue } from 'recoil';
import { productDetailAtom } from '../../states/productDetailAtom';

const Footer: React.FC = () => {
  const param = useParams();
  const [optionCheck, setOptionCheck] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string>('');
  const [currentOptionExtraAmt, setCurrentOptionExtraAmt] = useState<number>(0);

  const productDetail = useRecoilValue(productDetailAtom);

  const wishButtonStyle: React.CSSProperties = {
    width: '2rem',
  };
  const svgStyle: React.CSSProperties = {
    width: '38px',
  };

  const buyToggleBtnOnClick = (optionCheck: boolean) => {
    setOptionCheck(!optionCheck);
    setCurrentOption('');
    setCurrentOptionExtraAmt(0);
    isActivePopUp(optionCheck);
  };

  const currentDate = new Date();
  const deatlineDate = new Date(productDetail.deadline);
  const isFinished = currentDate > deatlineDate;

  return (
    <FooterContainer $isFinished={isFinished}>
      <Deadline deadline={productDetail.deadline} />
      <FeatureBtnBox>
        <WishButton
          productCode={0}
          style={wishButtonStyle}
          svgStyle={svgStyle}
          wished={productDetail.wished}
        />
        <ColoredButton
          font="Subhead2"
          onClick={() => buyToggleBtnOnClick(optionCheck)}
          color="white"
        >
          구매하기
        </ColoredButton>
        <OutlineButton font="Subhead2" border="Orange5" color="Orange5">
          <Link to={`/affiliates/${param.product_code}`}>판매하기</Link>
        </OutlineButton>
      </FeatureBtnBox>
      <OptionChoose
        active={optionCheck}
        buyToggleBtnOnClick={() => buyToggleBtnOnClick(optionCheck)}
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
        currentOptionExtraAmt={currentOptionExtraAmt}
        setCurrentOptionExtraAmt={setCurrentOptionExtraAmt}
      />
    </FooterContainer>
  );
};

const FooterContainer = styled.footer<{ $isFinished: boolean }>`
  position: fixed;
  max-width: 600px;
  border-radius: 12px 12px 0 0;
  z-index: 999;
  bottom: 0;
  padding: 0 0 3vh 0;
  width: 100%;
  background-color: white;
  //마감이 끝났을때 활성화될 css
  ${(props) =>
    props.$isFinished &&
    css`
      color: black;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        inset: 0;
        background-color: rgba(255, 255, 255, 0.3);
      }
    `}
`;

const FeatureBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 0 20px;
  & > * {
    margin: 0 4px;
  }
`;

export default Footer;
