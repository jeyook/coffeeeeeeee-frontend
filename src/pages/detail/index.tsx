import { Menu } from '../../components/molecules/DetailView/PlaceMenuGrid';
import { Review } from '../../components/molecules/DetailView/PlaceReview';
import DetailViewTemplate from '../../components/templates/DetailViewTemplate';

const Detail = () => {
  // TODO: 서버에서 데이터 받아오기
  const name = 'Coffee Kong';
  const address = '서울특별시 서초구 방배동 세연로 94-515 커피타워 106호';
  const tags = [
    '#사진맛집',
    '#다양한원두',
    '#애견',
    '#데이트맛집',
    '#디저트맛집',
  ];
  const imageUrl = 'img1';
  const homepageUrl = 'url1';
  const rating = 4.5;
  const menu: Menu[] = [
    {
      imageUrl: 'img2',
      name: '아메리카노',
      price: 3000,
    },
    {
      imageUrl: 'img3',
      name: '카페라떼',
      price: 4000,
    },
    {
      imageUrl: 'img4',
      name: '핸드드립',
      price: 5000,
    },
  ];
  const openingInfo = '10:00~21:00';
  const bookmarkCounts = 100;
  const reviews: Review[] = [
    {
      id: 1,
      author: 'jisu',
      authorId: 1,
      content: '커피 맛있어요 분위기 좋아요',
      imageUrl: 'image111',
      rating: 4,
      createdAt: '2024-03-10 10:00:00',
    },
    {
      id: 2,
      author: 'aaaa',
      authorId: 2,
      content: '커피 맛있어요 분위기 좋아요',
      imageUrl: 'image111',
      rating: 4,
      createdAt: '2024-03-12 10:00:00',
    },
    {
      id: 3,
      author: 'sddd',
      authorId: 3,
      content: '커피 맛있어요 분위기 좋아요',
      imageUrl: 'image111',
      rating: 4,
      createdAt: '2024-03-13 10:00:00',
    },
    {
      id: 4,
      author: 'aaaa',
      authorId: 4,
      content: '커피 맛있어요 분위기 좋아요',
      imageUrl: 'image111',
      rating: 4,
      createdAt: '2024-03-14 10:00:00',
    },
  ];
  return (
    <DetailViewTemplate
      name={name}
      imageUrl={imageUrl}
      address={address}
      homepageUrl={homepageUrl}
      tags={tags}
      rating={rating}
      openingInfo={openingInfo}
      bookmarkCounts={bookmarkCounts}
      menu={menu}
      reviews={reviews}
    ></DetailViewTemplate>
  );
};

export default Detail;
