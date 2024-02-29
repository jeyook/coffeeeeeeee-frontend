import styled from '@emotion/styled';
import Button from '../../atoms/Button';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Input from '../../atoms/Input/Input';

// icons from https://www.svgrepo.com/collection/coolicons-line-oval-icons

const Header = () => {
  const path = usePathname();
  const router = useRouter();
  const [searchInput, setSearchInput] = useState();

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
      <SearchWrap>
        <SearchButtonWrap>
          <Button
            imgUrl="https://www.svgrepo.com/show/511119/search-magnifying-glass.svg"
            onClick={onSearch}
          ></Button>
        </SearchButtonWrap>
        <Input
          fontSize={'1.2rem'}
          placeholder="위치, 장소, 카페명, 키워드 검색"
          borderRadius={'6px'}
          onChange={e => setSearchInput(e.target.value)}
        ></Input>
      </SearchWrap>
      <MenuWrap>
        <Button
          imgUrl={
            path === '/list'
              ? 'https://www.svgrepo.com/show/511062/map.svg'
              : 'https://www.svgrepo.com/show/511052/list-unordered.svg'
          }
          imgAlt="icon"
          name={path === '/list' ? 'Map' : 'List'}
          fontColor="#ead258" // TODO: 기본 스타일에서 컬러 사용
          fontSize={1.2}
          flexDirection="row"
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
`;

const SearchButtonWrap = styled.div`
  display: flex;
  position: absolute;
`;

const SearchWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-grow: 1;
`;

const MenuWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  border: 1px solid #ead258;
  border-radius: 6px;
  padding: 6px;
`;
