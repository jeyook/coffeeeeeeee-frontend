import styled from '@emotion/styled';
import PlaceDetail from '../organisms/DetailView/PlaceDetail';
import PlaceReviewsList from '../organisms/DetailView/PlaceReviewsList';
import PlaceMenu from '../organisms/DetailView/PlaceMenu';
import { Menu } from '../molecules/DetailView/PlaceMenuGrid';
import { Review } from '../molecules/DetailView/PlaceReview';

interface DetailViewProps {
  name: string;
  imageUrl: string;
  address: string;
  homepageUrl: string;
  tags: string[];
  rating: number;
  menu: Menu[];
  openingInfo: string;
  bookmarkCounts: number;
  reviews: Review[];
}
const DetailViewTemplate = ({
  name,
  imageUrl,
  address,
  homepageUrl,
  tags,
  rating,
  menu,
  openingInfo,
  bookmarkCounts,
  reviews,
}: DetailViewProps) => {
  return (
    <DetailViewTemplateWrap>
      <PlaceDetail
        name={name}
        imageUrl={imageUrl}
        address={address}
        homepageUrl={homepageUrl}
        tags={tags}
        rating={rating}
        openingInfo={openingInfo}
        bookmarkCounts={bookmarkCounts}
      />
      <PlaceMenu menu={menu} />
      <PlaceReviewsList reviews={reviews} />
    </DetailViewTemplateWrap>
  );
};

const DetailViewTemplateWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default DetailViewTemplate;
