import styled from '@emotion/styled';
import Label from '../../atoms/Label/Label';
import Image from '../../atoms/Image';
import Rating from '../../molecules/Rating';
import Button from '../../atoms/Button';
import PlaceTitle from '../../molecules/DetailView/PlaceTitle';
import RatingAndTags from '../../molecules/DetailView/RatingAndTags';
import PlaceOpeningInfo from '../../molecules/DetailView/PlaceOpeningInfo';
import PlaceMenu from '../../molecules/DetailView/PlaceMenu';

interface PlaceDetailProps {
  name: string;
  imageUrl: string;
  address: string;
  homepageUrl: string;
  tags: string[];
  rating: number;
  // TODO: 추가 정보들 확인
  // menu,
  // openingInfo,
  // bookmarkCounts: number;
}

const PlaceDetail = ({
  name,
  imageUrl,
  tags,
  address,
  rating,
  // bookmaikCounts,
  // openingInfo,
  // menu,
}: PlaceDetailProps) => {
  const bookmarkCounts = 100;
  const openingInfo = '평일 9:00 ~ 23:00 주말·공휴일 10:00 ~ 22:00 연중무휴';

  const menu = ['a', 'b', 'c'];
  return (
    <PlaceDetailWrap>
      <PlaceTitle name={name} bookmarkCount={bookmarkCounts}></PlaceTitle>
      <PlaceImageWrap>
        <Image imgUrl={imageUrl} imgAlt={name} width={29.6} height={23.4} />
      </PlaceImageWrap>
      <RatingAndTags rating={rating} tags={tags}></RatingAndTags>
      <AddressWrap>
        <Label content={address} size="1.4rem" />
      </AddressWrap>
      <PlaceOpeningInfo openingHours={openingInfo}></PlaceOpeningInfo>
      <PlaceMenu menu={menu}></PlaceMenu>
    </PlaceDetailWrap>
  );
};

const PlaceDetailWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 1.3rem;
`;

const PlaceImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  border-radius: 0.6rem;
  background-color: lightgray;
  img: {
    object-fit: cover;
  }
`;

const AddressWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  background-color: lightgray;
  width: 100%;
  padding: 0.9rem 1.2rem;
  margin: 0.8rem 0;
`;

export default PlaceDetail;
