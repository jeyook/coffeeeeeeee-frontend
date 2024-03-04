import styled from '@emotion/styled';
import Button from '../../atoms/Button';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const NAV_ROUTES = {
  home: '/home',
  favorites: '/favorites',
  my: '/my',
};

const Nav = () => {
  const primaryRgb = '#ead258'; // TODO: use hook
  const router = useRouter();
  const path = usePathname();

  return (
    <NavWrap>
      <ButtonWrap
        color={primaryRgb}
        backgroundColor={path === NAV_ROUTES.home ? primaryRgb : 'transparent'}
      >
        <Button
          onClick={() => router.push(NAV_ROUTES.home)} // TODO: console.log 대신 routing
          imgUrl="https://www.svgrepo.com/show/511018/house-01.svg" // TODO: url 대신 에셋 확보, 이미지 컬러 맞추기
        ></Button>
      </ButtonWrap>
      <ButtonWrap
        color={primaryRgb}
        backgroundColor={
          path === NAV_ROUTES.favorites ? primaryRgb : 'transparent'
        }
      >
        <Button
          onClick={() => router.push(NAV_ROUTES.favorites)} // TODO: console.log 대신 routing
          imgUrl="https://www.svgrepo.com/show/511015/heart-01.svg" // TODO: url 대신 에셋 확보, 이미지 컬러 맞추기
        ></Button>
      </ButtonWrap>
      <ButtonWrap
        color={primaryRgb}
        backgroundColor={path === NAV_ROUTES.my ? primaryRgb : 'transparent'}
      >
        <Button
          onClick={() => router.push(NAV_ROUTES.my)} // TODO: console.log 대신 routing
          imgUrl="https://www.svgrepo.com/show/511194/user-circle.svg" // TODO: url 대신 에셋 확보, 이미지 컬러 맞추기
        ></Button>
      </ButtonWrap>
    </NavWrap>
  );
};

const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
`;

const ButtonWrap = styled.div<{
  color: string;
  backgroundColor: string;
}>`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  border: 1px solid ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border-radius: 6px;
  padding: 3px;
`;

export default Nav;
