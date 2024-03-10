import styled from '@emotion/styled';
import PlaceDetail from '../organisms/DetailView/PlaceDetail';
import PlaceReviews from '../organisms/DetailView/PlaceReviews';
import PlaceMenu from '../organisms/DetailView/PlaceMenu';

interface DetailViewProps {
  name: string;
  imageUrl: string;
  address: string;
  homepageUrl: string;
  tags: string[];
  rating: number;
}
const DetailViewTemplate = () => {
  return (
    <DetailViewTemplateWrap>
      <PlaceDetail
        name={'커피커피'}
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
      <PlaceMenu menu={[]} />
      <PlaceReviews />
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
