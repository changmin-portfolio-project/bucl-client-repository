import React, { SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import OptionCount from './OptionCount';
import {
  getOptions,
  optionsData,
} from '../../../services/productDetail/getOptions';
import { useParams } from 'react-router-dom';
import OutlineButton from '../../OutlineButton';
import { animation } from '../../../style/animation';

interface OptionChooseProps {
  active: boolean;
  buyToggleBtnOnClick: () => void;
  currentOption: string;
  setCurrentOption: React.Dispatch<SetStateAction<string>>;
  currentOptionExtraAmt: number;
  setCurrentOptionExtraAmt: React.Dispatch<SetStateAction<number>>;
  crntOptSkuCode: number;
  setCrntOptSkuCode: React.Dispatch<SetStateAction<number>>;
}

const OptionChoose: React.FC<OptionChooseProps> = ({
  active,
  buyToggleBtnOnClick,
  currentOption,
  setCurrentOption,
  currentOptionExtraAmt,
  setCurrentOptionExtraAmt,
  crntOptSkuCode,
  setCrntOptSkuCode,
}) => {
  const param = useParams();

  const optionItemOnClick = (
    optionName: string,
    extraAmount: number,
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    e.stopPropagation(); // 이벤트 전파 중지
    setCurrentOption(optionName);
    setCurrentOptionExtraAmt(extraAmount);
    setCrntOptSkuCode(optionList[index].skuCode);
  };

  const [optionList, setOptionList] = useState<optionsData[]>([]);
  const [optionCount, setOptionCount] = useState<number>(1);
  useEffect(() => {
    if (param.product_code)
      getOptions(param.product_code).then((res) => {
        setOptionList(res.data);
      });
  }, []);

  // const handStopPopup = (event: React.MouseEvent<HTMLElement>) => {
  //   console.log(event);
  // };

  return (
    <>
      {active && (
        <OptionChooseContainer onClick={buyToggleBtnOnClick}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {currentOption ? (
              <OptionCount
                currentOption={currentOption}
                setCurrentOption={setCurrentOption}
                currentOptionExtraAmt={currentOptionExtraAmt}
                setCurrentOptionExtraAmt={setCurrentOptionExtraAmt}
                optionCount={optionCount}
                setOptionCount={setOptionCount}
                crntOptSkuCode={crntOptSkuCode}
              />
            ) : (
              <OptionChooseWrap>
                <OptionBox>
                  <Title>옵션 선택하기</Title>
                  {optionList?.map((v, i) => (
                    <OptionItem
                      onClick={(e) =>
                        optionItemOnClick(
                          v?.values.toString(),
                          v?.extraAmount,
                          e,
                          i,
                        )
                      }
                      key={i}
                    >
                      <OptionName>{v.values}</OptionName>
                    </OptionItem>
                  ))}
                </OptionBox>
                <CloseBtnBox>
                  <OutlineButton
                    border="Orange5"
                    color="Orange5"
                    font="Subhead2"
                    onClick={buyToggleBtnOnClick}
                  >
                    옵션 선택 닫기
                  </OutlineButton>
                </CloseBtnBox>
              </OptionChooseWrap>
            )}
          </div>
        </OptionChooseContainer>
      )}
    </>
  );
};

const OptionChooseContainer = styled.div`
  position: fixed;
  max-width: 600px;
  z-index: 999;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const OptionChooseWrap = styled.div`
  animation: ${animation.slideUp} 0.2s ease-in-out;
`;

const OptionBox = styled.div`
  padding: 0 ${({ theme }) => theme.paddings.base};
  width: calc(100% - (${({ theme }) => theme.paddings.base}*2));
  max-height: 50vh;
  overflow-y: auto;
  background-color: white;
  border-radius: 8px 8px 0 0;
`;
const Title = styled.p`
  padding: 15px 0 8px 0;
  font: ${({ theme }) => theme.fontSizes.Body3};
`;
const OptionItem = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.grey.Grey4};
  border-radius: 4px;
`;
const OptionName = styled.span`
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey8};
`;

const CloseBtnBox = styled.div`
  padding: 15px ${({ theme }) => theme.paddings.base} 40px
    ${({ theme }) => theme.paddings.base};
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.grey.Grey3};
`;

export default OptionChoose;
