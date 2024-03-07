// Dropdown.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { OrderPaymentType } from '../../../../global/interface/OrderInterface';
import { ORD_PAY_DATA } from '../../../../const/SessionStorageVars';
import { ordPayDataAtom } from '../../../../states/orderAtom';
import { useSetRecoilState } from 'recoil';
import { animation } from '../../../../style/animation';

interface DropdownProps {
  options: string[];
}

const DropdownContainer = styled.div`
  position: relative;

  flex-shrink: 0;
  margin: 20px 20px 0 20px;
`;

const DropdownButton = styled.button`
  color: ${({ theme }) => theme.grey.Grey5};
  border: none;
  cursor: pointer;
  width: 100%;
  padding-left: 13px;
  box-sizing: border-box;

  border-radius: 4px;

  background: var(--white, #fff);
  text-align: left;
  font: ${({ theme }) => theme.fontSizes.Body2};
  padding: 10px 0 10px 13px;
  border: 1px solid ${({ theme }) => theme.grey.Grey5};
`;

interface DropdownContentProps {
  $opened: boolean;
}

const DropdownContent = styled.div<DropdownContentProps>`
  display: ${(props) => (props.$opened ? 'block' : 'none')};
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey8};
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--white, #fff);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1;
  width: 100%;
  animation: ${animation.slideDown} 0.5s forwards;
`;
const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  padding: 15px 10px;

  &:hover {
    background-color: #ddd;
  }
`;

const InputContainer = styled.div`
  margin: 10px 20px 0 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.grey.Grey5};
  border-radius: 4px;
  box-sizing: border-box;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey7};
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  /** 바꿈 */
  const setOrdPayDataState = useSetRecoilState(ordPayDataAtom);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    orderPaymentData.memoCnt = '';
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  }, []);

  // const inputRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setInputValue('');
    setIsOpen(false);
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    if (option === '직접 입력') {
      orderPaymentData.memoCnt = '';
      setOrdPayDataState(orderPaymentData);
      sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
    } else {
      orderPaymentData.memoCnt = option;
      setOrdPayDataState(orderPaymentData);
      sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const orderPaymentData: OrderPaymentType = JSON.parse(
      sessionStorage.getItem(ORD_PAY_DATA) || '{}',
    );
    setInputValue(event.target.value);

    orderPaymentData.memoCnt = event.target.value;
    setOrdPayDataState(orderPaymentData);
    sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
  };

  return (
    <div>
      <DropdownContainer>
        <DropdownButton onClick={handleToggle}>
          {selectedOption || '배송 시 요청사항을 선택해주세요.'}
        </DropdownButton>
        <DropdownContent $opened={isOpen}>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownContent>
      </DropdownContainer>
      {selectedOption === '직접 입력' && (
        <InputContainer>
          <Input
            type="text"
            placeholder="내용을 입력해주세요 / 50자"
            value={inputValue}
            onChange={handleInputChange}
          />
        </InputContainer>
      )}
    </div>
  );
};

export default Dropdown;
