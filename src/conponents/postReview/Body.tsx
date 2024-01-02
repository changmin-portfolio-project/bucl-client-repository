import React from 'react';
import StarClick from './body/StarClick';
import Preview from './body/Preview';
import styled from 'styled-components';
import PostReviewInput from './body/PostReviewInput';
import PhotoAttachBtn from './body/PhotoAttachBtn';
import PostConfirmBtn from './body/PostConfirmBtn';

const Body: React.FC = () => {
  return (
    <BodyContainer>
      <Preview />
      <HelpText>상품은 괜찮으셨나요?</HelpText>
      <StarClick />
      <PostReviewInput />
      <PhotoAttachBtn />
      <PostConfirmBtn />
    </BodyContainer>
  );
};

const BodyContainer = styled.main`
  padding: 57px 7% 0 7%;
`;

const HelpText = styled.p`
  font: ${({ theme }) => theme.fontSizes.Body3};
`;

export default Body;
