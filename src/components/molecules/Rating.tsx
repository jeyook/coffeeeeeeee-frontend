import styled from '@emotion/styled';
import Label from '../atoms/Label/Label';
import Image from '../atoms/Image';

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  return (
    <RatingWrap>
      <Image
        imgUrl={'https://www.svgrepo.com/show/511145/star.svg'}
        imgAlt={'평점'}
        width={2.4}
        height={2.4}
      ></Image>
      <Label content={String(rating)} size={'2.4rem'}></Label>
    </RatingWrap>
  );
};

const RatingWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export default Rating;
