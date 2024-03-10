import styled from '@emotion/styled';
import Label from '../../atoms/Label/Label';
import Button from '../../atoms/Button';

interface PlaceTitleProps {
  name: string;
  bookmarkCount: number;
}
const PlaceTitle = ({ name, bookmarkCount }: PlaceTitleProps) => {
  const onClickBookmark = () => console.log('bookmarked');
  return (
    <PlaceTitleWrap>
      <Label content={name} size={'1.8rem'} color={'grey'} />
      <Button
        imgUrl="https://www.svgrepo.com/show/511015/heart-01.svg"
        onClick={onClickBookmark}
        width={1.8}
        height={1.8}
      ></Button>
      <Label
        content={`(${bookmarkCount})`}
        size={'1.2rem'}
        color={'#EAD258'}
      ></Label>
    </PlaceTitleWrap>
  );
};

const PlaceTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  padding: 0.8rem 0;
`;

export default PlaceTitle;
