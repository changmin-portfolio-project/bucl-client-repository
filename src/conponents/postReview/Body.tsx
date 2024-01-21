import React from 'react';
import StarClick from './body/StarClick';
import Preview from './body/Preview';
import styled from 'styled-components';
import PostReviewInput from './body/PostReviewInput';
import PhotoAttachBtn from './body/PhotoAttachBtn';
import PostConfirmBtn from './body/PostConfirmBtn';
import BodyLayout from '../layout/BodyLayout';

const Body: React.FC = () => {
  return (
    <BodyLayout>
      <PostReviewContainer>
        <Preview />
        <HelpText>상품은 괜찮으셨나요?</HelpText>
        <StarClick />
        <PostReviewInput />
        <PhotoAttachBtn />
        <PostConfirmBtn />
      </PostReviewContainer>
    </BodyLayout>
  );
};

const PostReviewContainer = styled.div`
  padding: 0 ${({ theme }) => theme.paddings.base};
`;

const HelpText = styled.p`
  font: ${({ theme }) => theme.fontSizes.Body3};
`;

export default Body;
