import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { starNumAtom } from '../../../states/postReviewAtom';
import { STAR_RATING } from '../../../const/PostReview';

const StarClick: React.FC = () => {
  const [count, setCount] = useRecoilState(starNumAtom);
  const starOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = e.target.defaultValue;
    setCount(Number(num) / 2);
  };

  const rating = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ];

  return (
    <>
      <StarClickContainer>
        {[...Array(10)].map((v, index) => (
          <input
            key={index}
            type="radio"
            id={`${STAR_RATING}${index + 1}`}
            name={`${STAR_RATING}`}
            value={index + 1}
            onChange={(e) => starOnChange(e)}
          />
        ))}
        {[...Array(5)].map((v, index) => (
          <StarBox key={index}>
            {count === index + 0.5 ? (
              <>
                <HalfStar />
                <label
                  className="half"
                  htmlFor={`${STAR_RATING}${rating[index][0]}`}
                />
                <label
                  className="half"
                  htmlFor={`${STAR_RATING}${rating[index][1]}`}
                />
              </>
            ) : count >= index + 1 ? (
              <>
                <FillStar />
                <label
                  className="half"
                  htmlFor={`${STAR_RATING}${rating[index][0]}`}
                />
                <label
                  className="half"
                  htmlFor={`${STAR_RATING}${rating[index][1]}`}
                />
              </>
            ) : (
              <>
                <Star />
                <label
                  className="half"
                  htmlFor={`${STAR_RATING}${rating[index][0]}`}
                />
                <label
                  className="half"
                  htmlFor={`${STAR_RATING}${rating[index][1]}`}
                />
              </>
            )}
          </StarBox>
        ))}
      </StarClickContainer>
    </>
  );
};

const StarClickContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 15px 0 30px 0;
  width: 100%;
  input {
    display: none;
  }
`;
const StarBox = styled.div`
  padding: 0 3px;
  position: relative;
  label {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    cursor: pointer;
    &:nth-child(3) {
      right: 0;
      background-color: transparent;
    }
    &:nth-child(2) {
      left: 0;
      background-color: transparent;
    }
  }
`;
const Star = styled(BsStarFill)`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.grey.Grey3};
`;
const HalfStar = styled(BsStarHalf)`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.mainColor.Orange5};
`;
const FillStar = styled(BsStarFill)`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.mainColor.Orange5};
`;

export default StarClick;
