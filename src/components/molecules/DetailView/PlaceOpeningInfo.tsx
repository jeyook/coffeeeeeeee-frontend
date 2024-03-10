import styled from '@emotion/styled';
import Label from '../../atoms/Label/Label';

interface PlaceOpeningInfoProps {
  openingHours: string;
}

const PlaceOpeningInfo = ({ openingHours }: PlaceOpeningInfoProps) => {
  return (
    <PlaceOpeningInfoWrap>
      <OpeningHoursTitleWrap>
        <Label content="영업시간" size={'1.6rem'} />
      </OpeningHoursTitleWrap>
      <OpeningHoursContentWrap>
        {/* Label에서 Text로 교체 */}
        <Label content={openingHours} size={'1.4rem'} color="gray" />
      </OpeningHoursContentWrap>
    </PlaceOpeningInfoWrap>
  );
};

const PlaceOpeningInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  padding: 1.3rem 0;
`;

const OpeningHoursTitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.2rem;
  width: 8rem;
`;

const OpeningHoursContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PlaceOpeningInfo;
