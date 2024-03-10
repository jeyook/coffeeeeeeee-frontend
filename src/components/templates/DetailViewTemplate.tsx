import styled from '@emotion/styled';
import PlaceDetail from '../organisms/DetailView/PlaceDetail';
import PlaceReviews from '../organisms/DetailView/PlaceReviews';

const DetailViewTemplate = () => {
  return (
    <DetailViewTemplateWrap>
      <PlaceDetail
        name={'이름'}
        imageUrl={''}
        address={'서울특별시 서초구 방배동 세연로 94-515 커피타워 106호'}
        homepageUrl={'홈페이지주소'}
        tags={[
          '#사진맛집',
          '#다양한원두',
          '#애견',
          '#데이트맛집',
          '#디저트맛집',
        ]}
        rating={4.5}
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

export default DetailViewTemplate;
