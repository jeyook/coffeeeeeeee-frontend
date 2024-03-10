import styled from '@emotion/styled';
import PlaceMenuGrid, { Menu } from '../../molecules/DetailView/PlaceMenuGrid';
import Label from '../../atoms/Label/Label';

interface PlaceMenuProps {
  menu: Menu[];
}

const PlaceMenu = ({ menu }: PlaceMenuProps) => {
  return (
    <PlaceMenuWrap>
      <PlaceMenuTitleWrap>
        <Label content="메뉴" size="1.6rem"></Label>
      </PlaceMenuTitleWrap>
      <PlaceMenuGrid menu={menu}></PlaceMenuGrid>
    </PlaceMenuWrap>
  );
};

const PlaceMenuWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  padding: 1.3rem;
  flex-direction: column;
`;

const PlaceMenuTitleWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  padding-top: 1.3rem;
  padding-bottom: 1rem;
`;

export default PlaceMenu;
