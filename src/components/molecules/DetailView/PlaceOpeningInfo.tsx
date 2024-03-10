import styled from '@emotion/styled';
import Label from '../../atoms/Label/Label';

interface PlaceOpeningInfoProps {
  openingHours: string;
}

const PlaceOpeningInfo = ({ openingHours }: PlaceOpeningInfoProps) => {
  return (
    <PlaceOpeningInfoWrap>
      <Label content="영업시간" size={'1.6rem'} />
      {/* Label에서 Text로 교체 */}
      <Label content={openingHours} size={'1.4rem'} />
    </PlaceOpeningInfoWrap>
  );
};

const PlaceOpeningInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PlaceOpeningInfo;
