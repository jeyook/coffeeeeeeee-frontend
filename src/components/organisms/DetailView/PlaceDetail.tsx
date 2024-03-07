import styled from '@emotion/styled';
import Label from '../../atoms/Label/Label';
import Image from '../../atoms/Image';
import Rating from '../../molecules/Rating';

interface PlaceDetailProps {
  name: string;
  imageUrl: string;
  address: string;
  homepageUrl: string;
  tags: string[];
  rating: number;
  // TODO: 추가 정보들 확인
  // menu
  // openHours
}

const PlaceDetail = ({ name, imageUrl, address, rating }: PlaceDetailProps) => {
  return (
    <PlaceDetailWrap>
      <PlaceInfoWrap>
        <Label content={name} />
        <Image imgUrl={imageUrl} imgAlt={name} />
        <Rating rating={rating} />
        <AddressWrap>
          <Label content={address} />
        </AddressWrap>
        {/* <PlaceTextInfoWrap>
          <Label content="영업시간" />
          <Label content='openHours' />
        </PlaceTextInfoWrap> */}
      </PlaceInfoWrap>
      {/* <PlaceMenuWrap>
        menu.map((item) => return <Menu info={item.info} />)
      </PlaceMenuWrap> */}
    </PlaceDetailWrap>
  );
};

const PlaceDetailWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddressWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const PlaceTextInfoWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const PlaceMenuWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export default PlaceDetail;
