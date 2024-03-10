import styled from '@emotion/styled';
import PlaceDetail from '../organisms/DetailView/PlaceDetail';
import PlaceReviews from '../organisms/DetailView/PlaceReviews';

const DetailViewTemplate = () => {
  return (
    <DetailViewTemplateWrap>
      <PlaceDetail
        name={'이름'}
        imageUrl={''}
        address={'주소'}
        homepageUrl={'홈페이지주소'}
        tags={['로스팅', '스페셜티']}
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
