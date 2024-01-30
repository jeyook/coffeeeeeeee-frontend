import styled from '@emotion/styled';

//border-radius 디자인 나오면 수정
//width, height 디자인 나오면 기본값 수정

type ThumbnailProps = {
  image: string;
  cafeName: string;
  width?: number;
  height?: number;
};

const Thumbnail = ({ image, cafeName, width, height }: ThumbnailProps) => {
  return (
    <ThumbnailWrap width={width} height={height}>
      <ThumbnailImg src={image} alt={cafeName} />
    </ThumbnailWrap>
  );
};

export default Thumbnail;

const ThumbnailWrap = styled.div<{ width?: number; height?: number }>`
  width: ${props =>
    props.width !== undefined ? `${props.width}rem` : '6.875rem'};
  height: ${props =>
    props.height !== undefined ? `${props.height}rem` : '4.6875rem'};
  overflow: hidden;
  border-radius: 0.5rem;
`;

const ThumbnailImg = styled.img`
  width: 100%;
`;
