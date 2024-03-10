import styled from '@emotion/styled';

interface PlaceMenuGridProps {
  menu: string[];
}
const PlaceMenuGrid = ({ menu }: PlaceMenuGridProps) => {
  // TODO: menu type 지정
  // TODO: 로직 구현
  return (
    <PlaceMenuGridWrap>
      {/* {menu.map((item) => <Menu info={item.info} />)} */}
    </PlaceMenuGridWrap>
  );
};

const PlaceMenuGridWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PlaceMenuGrid;
