// Dropdown.tsx
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { memoCntAtom } from '../../../../states/orderAtom';

interface DropdownProps {
  options: string[];
}

const DropdownContainer = styled.div`
  position: relative;

  flex-shrink: 0;
  margin: 20px 20px 0 20px;
`;

const DropdownButton = styled.button`
  color: var(--grey-8, #343a40);
  border: none;
  cursor: pointer;
  width: 100%;
  padding-left: 13px;
  box-sizing: border-box;

  border-radius: 4px;
  border: 1px solid var(--grey-5, #acb5bd);
  background: var(--white, #fff);
  text-align: left;
  padding-top: 9.5px;
  padding-bottom: 10.5px;
`;

interface DropdownContentProps {
  isOpen: boolean;
}

const DropdownContent = styled.div<DropdownContentProps>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--white, #fff);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 4px 4px;
  z-index: 1;
  width: 100%;
`;
const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
  border-bottom: 1px solid #eaecef;
`;

const InputContainer = styled.div`
  margin: 10px 20px 0 20px;
`;

const Input = styled.input`
  padding: 10px;
  box-sizing: border-box;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');
  const setMemoCnt = useSetRecoilState(memoCntAtom);

  useEffect(() => {
    setMemoCnt('');
  }, []);

  // const inputRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setInputValue('');
    setIsOpen(false);
    if (option === '직접 입력') {
      setMemoCnt('');
    } else {
      setMemoCnt(option);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    setMemoCnt(event.target.value);
  };

  return (
    <div>
      <DropdownContainer>
        <DropdownButton onClick={handleToggle}>
          {selectedOption || '배송 시 요청사항을 선택해주세요.'}
        </DropdownButton>
        <DropdownContent isOpen={isOpen}>
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
