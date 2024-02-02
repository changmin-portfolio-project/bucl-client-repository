import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { reviewImgListAtom } from '../../../states/postReviewAtom';
import { REVIEW_IMG_MAX_NUM } from '../../../const/Review';

const PhotoAttachButton: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [reviewImgList, setReviewImgList] = useRecoilState(reviewImgListAtom);
  const galleryOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || reviewImgList.length >= REVIEW_IMG_MAX_NUM) {
      console.log(reviewImgList);
      return;
    }

    const file = e.target.files[0];

    // const reader = new FileReader();
    // reader.onloadend = () => {
    //   setImageUrls([...imageUrls, reader.result as string]);
    // };
    // reader.readAsDataURL(file);
    setImageUrls([...imageUrls, URL.createObjectURL(file)]);
    setReviewImgList([...reviewImgList, file]);
    console.log(reviewImgList);
  };

  const delImgClick = (index: number) => {
    setImageUrls(imageUrls.filter((_, i) => i !== index));
    setReviewImgList(reviewImgList.filter((_, i) => i !== index));
  };
  return (
    <>
      {imageUrls ? (
        <StyAttImgContainer>
          {imageUrls.map((imageUrl, index) => (
            <StyAttImgWrap key={index}>
              <StyDelIcon
                src="/assets/CameraIcon.svg"
                onClick={() => {
                  delImgClick(index);
                }}
              />
              <AttachImage src={imageUrl} key={index} />
            </StyAttImgWrap>
          ))}
        </StyAttImgContainer>
      ) : (
        <></>
      )}
      {imageUrls.length < REVIEW_IMG_MAX_NUM ? (
        <>
          <PhotoInput
            id="photo-attach-btn"
            type="file"
            accept="image/*"
            onChange={galleryOnChange}
          />
          <AttachBtn htmlFor="photo-attach-btn">
            <img src="/assets/CameraIcon.svg" />
            사진 첨부하기
          </AttachBtn>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const PhotoInput = styled.input`
  display: none;
`;
const AttachBtn = styled.label`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 10px 0;
  width: 100%;
  background-color: white;
  border: 1px dashed ${({ theme }) => theme.grey.Grey4};
  border-radius: 4px;
  font: ${({ theme }) => theme.fontSizes.Subhead2};
  color: ${({ theme }) => theme.grey.Grey8};
  img {
    padding-right: 5px;
    width: 5%;
  }
`;

const StyAttImgContainer = styled.div`
  display: inline-flex;
`;

const StyAttImgWrap = styled.div`
  overflow: hidden;
  width: 5em;
  height: 5em;
  margin-right: 8px;
  position: relative;
`;

const AttachImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 4px;
`;

const StyDelIcon = styled.img`
  position: absolute;
  left: 80%;
`;

export default PhotoAttachButton;
