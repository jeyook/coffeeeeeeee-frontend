import styled from '@emotion/styled';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Button from '../../atoms/Button';
import Input from '../../atoms/Input/Input';
import useCssVariable from '../../../hooks/useCssVariable';

// icons from https://www.svgrepo.com/collection/coolicons-line-oval-icons

const Header = () => {
  const path = usePathname();
  const router = useRouter();
  const [searchInput, setSearchInput] = useState();

  const primaryColor = useCssVariable('--primary-rgb');
  const foregroundColor = useCssVariable('--foreground-rgb');

  const changeView = () => {
    if (path === '/list') {
      router.push('/');
    } else {
      router.push('/list');
    }
  };

  const onSearch = () => {
    console.log('search for', searchInput);
  };

  return (
    <HeaderWrap>
      <BrandWrap color={primaryColor}></BrandWrap>
      <SearchWrap color={foregroundColor}>
        <Button
          imgUrl="https://www.svgrepo.com/show/511119/search-magnifying-glass.svg"
          width={2.5}
          onClick={onSearch}
        ></Button>
        <Input
          fontSize={'1.2rem'}
          placeholder="위치, 장소, 카페명, 키워드 검색"
          borderRadius={'6px'}
          onChange={e => setSearchInput(e.target.value)}
        ></Input>
      </SearchWrap>
      <MenuWrap color={primaryColor}>
        <Button
          imgUrl={
            path === '/list'
              ? 'https://www.svgrepo.com/show/511062/map.svg'
              : 'https://www.svgrepo.com/show/511052/list-unordered.svg'
          }
          imgAlt="icon"
          name={path === '/list' ? 'Map' : 'List'}
          fontColor={primaryColor} // TODO: 기본 스타일에서 컬러 사용
          fontSize={1.2}
          flexDirection="row"
          width={5}
          onClick={changeView}
        ></Button>
      </MenuWrap>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 12px;
`;

const BrandWrap = styled.div<{
  color: string;
}>`
  display: none;
`;

const SearchWrap = styled.div<{
  color: string;
}>`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 36px;
  border-radius: 6px;
  flex-grow: 1;
  padding: 6px;
  margin-right: 6px;
  box-shadow: 0 0 3px 0 rgb(${props => props.color});
`;

const MenuWrap = styled.div<{
  color: string;
}>`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  border: 1px solid ${props => props.color};
  border-radius: 6px;
  padding: 3px;
`;
