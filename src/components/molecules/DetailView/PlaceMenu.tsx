import styled from '@emotion/styled';

interface PlaceMenuProps {
  menu: string[];
}
const PlaceMenu = ({ menu }: PlaceMenuProps) => {
  // TODO: menu type 지정
  // TODO: 로직 구현
  return (
    <PlaceMenuWrap>
      {/* {menu.map((item) => <Menu info={item.info} />)} */}
    </PlaceMenuWrap>
  );
};

const PlaceMenuWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PlaceMenu;
