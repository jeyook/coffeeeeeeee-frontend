import { useState } from 'react';
import styled from '@emotion/styled';

//img 디자인에 맞춰 수정
//setBookmark 부모에서 추후 통신할 때 사용 + 전달할 값 백과 논의 필요

type BookmarkProps = {
  isBookmark: number;
  setBookmark: React.Dispatch<React.SetStateAction<number>>;
};

const Bookmark = ({ isBookmark, setBookmark }: BookmarkProps) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const fillBookmarkImg = '/images/yellow_filled_star.svg';
  const notFillBookmarkImg = '/images/yellow_star.svg';

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const clickedElement = event.currentTarget;
    const img = clickedElement.querySelector('img');
    const imgSrc = img?.getAttribute('src');
    if (imgSrc === notFillBookmarkImg) {
      if (window.confirm('즐겨찾기에 추가하시겠습니까?')) {
        // setBookmark(1)
        setIsClick(!isClick);
      }
    } else if (imgSrc === fillBookmarkImg) {
      if (window.confirm('즐겨찾기에서 삭제하시겠습니까?')) {
        // setBookmark(0)
        setIsClick(!isClick);
      }
    }
  };

  return (
    <BookmarkWrap onClick={handleClick}>
      {isBookmark ? (
        <BookmarkImg
          src={isClick ? notFillBookmarkImg : fillBookmarkImg}
          alt="즐겨찾기"
        />
      ) : (
        <BookmarkImg
          src={isClick ? fillBookmarkImg : notFillBookmarkImg}
          alt="즐겨찾기"
        />
      )}
    </BookmarkWrap>
  );
};

export default Bookmark;

const BookmarkWrap = styled.span`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
`;

const BookmarkImg = styled.img`
  width: 100%;
  height: 100%;
`;
