import styled from '@emotion/styled';
import Label from '../atoms/Label/Label';
import Image from '../atoms/Image';

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  return (
    <RatingWrap>
      <Image imgUrl={'image of star'} imgAlt={'평점'} width={2}></Image>
      <Label content={String(rating)}></Label>
    </RatingWrap>
  );
};

const RatingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Rating;
