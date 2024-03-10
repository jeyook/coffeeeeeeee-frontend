import styled from '@emotion/styled';
import Image from '../../atoms/Image';
import Label from '../../atoms/Label/Label';

export type Menu = {
  imageUrl: string;
  price: number;
  name: string;
};
interface PlaceMenuGridProps {
  menu: Menu[];
}
const PlaceMenuGrid = ({ menu }: PlaceMenuGridProps) => {
  // TODO: menu type 지정
  // TODO: 로직 구현
  return (
    <PlaceMenuGridWrap>
      {menu.map(item => (
        <MenuWrap>
          <MenuImageWrap>
            <Image
              imgUrl={item.imageUrl}
              imgAlt={item.name}
              width={14}
              height={14}
            ></Image>
          </MenuImageWrap>
          <MenuInfoWrap>
            <Label content={item.name} size={'1.4rem'}></Label>
            <Label
              content={`${item.price.toLocaleString()}원`}
              size={'1.4rem'}
            ></Label>
          </MenuInfoWrap>
        </MenuWrap>
      ))}
    </PlaceMenuGridWrap>
  );
};

const PlaceMenuGridWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 1.3rem;
`;

const MenuWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MenuImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  background-color: gray;
  width: 14rem;
  margin-bottom: 1rem;
  img: {
    object-fit: cover;
  }
`;

const MenuInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  width: 100%;
  gap: 0.6rem;
`;

export default PlaceMenuGrid;
