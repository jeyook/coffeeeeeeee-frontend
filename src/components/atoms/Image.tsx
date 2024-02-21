import styled from '@emotion/styled';

type ImageProps = {
  imgUrl: string;
  imgAlt: string;
  width?: number;
  height?: number;
};

const Image = ({ imgUrl, imgAlt, width, height }: ImageProps) => {
  return (
    <ImageWrap width={width} height={height}>
      <img className="img" src={imgUrl} alt={imgAlt} />
    </ImageWrap>
  );
};

export default Image;

const ImageWrap = styled.p<{ width?: number; height?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: ${({ width }) => (width !== undefined ? `${width}rem` : '8rem')};
  height: ${({ height }) => (height !== undefined ? `${height}rem` : '6rem')};
  border-radius: 0.5rem;

  .img {
    height: 100%;
  }
`;
