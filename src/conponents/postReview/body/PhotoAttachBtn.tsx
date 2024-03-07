import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  imageUrlListAtom,
  reviewImgListAtom,
} from '../../../states/postReviewAtom';
import { REVIEW_IMG_MAX_NUM } from '../../../const/Review';
import { resizeImage } from '../../../utils/ImageUtil';

const PhotoAttachButton: React.FC = () => {
  const [imageUrls, setImageUrls] = useRecoilState(imageUrlListAtom);
  const [reviewImgList, setReviewImgList] = useRecoilState(reviewImgListAtom);

  async function galleryOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || reviewImgList.length >= REVIEW_IMG_MAX_NUM) {
      return;
    }
    try {
      const file = e.target.files[0];
      const resizedImage = await resizeImage(file, 600, 600);
      const uploadFile = new File([resizedImage], file.name);

      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   setImageUrls([...imageUrls, reader.result as string]);
      // };
      // reader.readAsDataURL(file);
      setImageUrls([...imageUrls, URL.createObjectURL(uploadFile)]);
      setReviewImgList([...reviewImgList, uploadFile]);
    } catch (error) {
      /* empty */
    }
  }

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
                src="/assets/DeleteBtn.png"
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
  left: 70%;
  top: 5%;
  width: 25%;
`;

export default PhotoAttachButton;
