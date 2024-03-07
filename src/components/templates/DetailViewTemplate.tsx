import styled from '@emotion/styled';
import PlaceDetail from '../organisms/DetailView/PlaceDetail';
import PlaceReviews from '../organisms/DetailView/PlaceReviews';

const DetailViewTemplate = () => {
  return (
    <DetailViewTemplateWrap>
      <PlaceDetail
        name={''}
        imageUrl={''}
        address={''}
        homepageUrl={''}
        tags={[]}
        rating={0}
      />
      <PlaceReviews />
    </DetailViewTemplateWrap>
  );
};

const DetailViewTemplateWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
