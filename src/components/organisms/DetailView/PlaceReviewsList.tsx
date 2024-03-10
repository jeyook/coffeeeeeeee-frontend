import styled from '@emotion/styled';
import PlaceReview, { Review } from '../../molecules/DetailView/PlaceReview';
import Button from '../../atoms/Button';

interface PlaceReviewsProps {
  reviews: Review[];
}

const PlaceReviewsList = ({ reviews }: PlaceReviewsProps) => {
  const onLoadAllReviews = () => console.log('리뷰 전체 보기');
  return (
    <PlaceReviewsWrap>
      <AllReviewsWrap onClick={onLoadAllReviews}>
        {`리뷰 ${reviews.length}개 모두 보기`}
      </AllReviewsWrap>
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
  width: 100%;
  padding: 1.3rem;
`;

const AllReviewsWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.4rem;
  width: 100%;
  color: #666666;
`;

const ReviewWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  width: 100%;
`;
export default PlaceReviewsList;
