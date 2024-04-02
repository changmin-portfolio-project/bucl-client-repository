import React from 'react';
import styled from 'styled-components';

interface AlertProps {
  text?: string;
  onClick?: () => void;
}

const Alert: React.FC<AlertProps> = ({ text, onClick }) => {
  return (
    <AlertContainer>
      <Title>알림</Title>
      <Text>{text}</Text>
      <ConfirmBtn onClick={onClick}>확인</ConfirmBtn>
    </AlertContainer>
  );
};

const AlertContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  width: 75%;
  max-width: 500px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grey.Grey3};
  border-radius: 4px;
`;

const Title = styled.p`
  margin-bottom: 10px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
`;

const Text = styled.p`
  margin-bottom: 10px;
  font: ${({ theme }) => theme.fontSizes.Body3};
  color: ${({ theme }) => theme.grey.Grey6};
`;

const ConfirmBtn = styled.button`
  padding: 3px 15px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.grey.Grey5};
  border-radius: 14px;
  font: ${({ theme }) => theme.fontSizes.Body2};
  color: ${({ theme }) => theme.grey.Grey8};
`;

export default Alert;
