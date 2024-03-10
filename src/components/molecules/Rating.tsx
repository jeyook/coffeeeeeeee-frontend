import styled from '@emotion/styled';
import Label from '../atoms/Label/Label';
import Image from '../atoms/Image';

interface RatingProps {
  rating: number;
  iconSize?: number;
  fontSize?: number;
}

const Rating = ({ rating, iconSize = 2.4, fontSize = 2.4 }: RatingProps) => {
  return (
    <RatingWrap>
      <Image
        imgUrl={'https://www.svgrepo.com/show/511145/star.svg'}
        imgAlt={'평점'}
        width={iconSize}
        height={iconSize}
      ></Image>
      <Label content={String(rating)} size={`${fontSize}rem`}></Label>
    </RatingWrap>
  );
};

const RatingWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export default Rating;
