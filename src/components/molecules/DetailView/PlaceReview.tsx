import styled from '@emotion/styled';
import Label from '../../atoms/Label/Label';
import Rating from '../Rating';
import Image from '../../atoms/Image';

export type Review = {
  id: number;
  author: string;
  authorId: number;
  rating: number;
  content: string;
  imageUrl: string;
  createdAt: string;
};

interface PlaceReviewProps {
  review: Review;
}

const PlaceReview = ({ review }: PlaceReviewProps) => {
  return (
    <ReviewWrap>
      <Label content={review.author} size={'1.6rem'}></Label>
      <Rating rating={review.rating} iconSize={1.4} fontSize={1.4}></Rating>
      <ReviewContentWrap>
        <ReviewImageWrap>
          <Image
            imgUrl={review.imageUrl}
            imgAlt={String(review.id)}
            width={7}
            height={7}
          ></Image>
        </ReviewImageWrap>
        <ReviewTextWrap>
          <Label content={review.content} size={'1.2rem'}></Label>
        </ReviewTextWrap>
      </ReviewContentWrap>
    </ReviewWrap>
  );
};

const ReviewWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  width: 100%;
  padding: 1.3rem 0;
  border-bottom: 1px solid #f4f4f4;
  gap: 0.6rem;
`;

const ReviewContentWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: start;
`;

const ReviewImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 7rem;
  border-radius: 0.4rem;
  background-color: lightgray;
`;

const ReviewTextWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: start;
  height: 100%;
  flex-grow: 1;
  padding: 0.6rem;
`;

export default PlaceReview;
