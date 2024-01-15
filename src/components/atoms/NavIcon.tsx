import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';

type NavIconProps = {
  icon: string;
  name: string;
  path: string;
};

const NavIcon = ({ icon, name, path }: NavIconProps) => {
  const route = useRouter();

  const goPage = () => {
    route.push(`${path}`);
  };

  return (
    <NavIconWrap onClick={goPage}>
      <NavIconImgWrap>
        <NavIconImg src={icon} alt={name} />
      </NavIconImgWrap>
      <NavIconName>{name}</NavIconName>
    </NavIconWrap>
  );
};

export default NavIcon;

//font-size: 16px(1rem)
//iconWrap 전체크기: 40px(2.5rem) x 56px(3.5rem)
//img크기: 32px(2rem)

const NavIconWrap = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.15rem 0.3rem 0.25rem 0.3rem;
  width: 2.5rem;
  height: 3.5rem;
`;

const NavIconImgWrap = styled.span`
  display: flex;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  margin-bottom: 0.1rem;
`;

const NavIconImg = styled.img`
  height: 100%;
`;

const NavIconName = styled.span`
  width: 100%;
  height: 1rem;
  font-size: 1rem;
  text-align: center;
`;
