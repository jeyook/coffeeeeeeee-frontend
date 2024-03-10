import styled from '@emotion/styled';
import Label from '../../atoms/Label/Label';
import Rating from '../Rating';

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
      <Label content={review.author}></Label>
      <Rating rating={review.rating} iconSize={1.4} fontSize={1.4}></Rating>
      <ReviewContentWrap></ReviewContentWrap>
    </ReviewWrap>
  );
};

const ReviewWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PlaceReview;
