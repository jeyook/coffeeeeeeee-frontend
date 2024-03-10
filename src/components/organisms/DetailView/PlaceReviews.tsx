import styled from '@emotion/styled';
import PlaceReview, { Review } from '../../molecules/DetailView/PlaceReview';

interface PlaceReviewsProps {
  reviews: Review[];
}

const PlaceReviews = ({ reviews }: PlaceReviewsProps) => {
  return (
    <PlaceReviewsWrap>
      {reviews.map((review, i) => {
        return (
          <ReviewWrap key={i}>
            <PlaceReview review={review}></PlaceReview>
          </ReviewWrap>
        );
      })}
    </PlaceReviewsWrap>
  );
};

const PlaceReviewsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ReviewWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
`;
export default PlaceReviews;
