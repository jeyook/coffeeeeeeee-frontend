import styled from '@emotion/styled';

type ButtonProps = {
  name?: string;
  imgUrl?: string;
  imgAlt?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  fontColor?: string;
  fontWeight?: number;
  borderColor?: string;
  borderRadius?: boolean;
  backgroundColor?: string;
  flexDirection?: 'row';
  onClick: () => void;
};

const Button = ({
  imgUrl,
  imgAlt,
  name,
  width,
  height,
  fontSize,
  fontColor,
  fontWeight,
  borderColor,
  borderRadius,
  backgroundColor,
  flexDirection,
  onClick,
}: ButtonProps) => {
  return (
    <Btn
      width={width}
      height={height}
      borderColor={borderColor}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      flexDirection={flexDirection}
      onClick={onClick}
    >
      {imgUrl && flexDirection ? (
        <ImgRow src={imgUrl} alt={imgAlt} />
      ) : (
        <Img width={width} src={imgUrl} alt={imgAlt} />
      )}
      {name && (
        <BtnName
          fontSize={fontSize}
          fontColor={fontColor}
          fontWeight={fontWeight}
        >
          {name}
        </BtnName>
      )}
    </Btn>
  );
};

export default Button;

const Btn = styled.button<{
  width?: number;
  height?: number;
  borderColor?: string;
  borderRadius?: boolean;
  backgroundColor?: string;
  flexDirection?: 'row';
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ flexDirection }) =>
    flexDirection === 'row' ? null : 'flex-direction: column;'}
  gap: 0.4rem;
  width: ${({ width }) => (width !== undefined ? `${width}rem` : '3.6rem')};
  height: ${({ height }) => (height !== undefined ? `${height}rem` : 'auto')};
  padding: 0.3rem;
  border: ${({ borderColor }) =>
    borderColor !== undefined ? `0.1rem solid ${borderColor}` : 'none'};
  background: ${({ backgroundColor }) =>
    backgroundColor !== undefined ? `${backgroundColor}` : 'none'};
  border-radius: ${({ borderRadius }) => (borderRadius ? '0.6rem' : '0')};
  cursor: pointer;
`;

const Img = styled.img<{
  width?: number;
  borderColor?: string;
  fill?: string;
}>`
  width: ${({ width, borderColor }) =>
    width !== undefined
      ? borderColor !== undefined
        ? `${width - 0.8}rem`
        : `${width - 0.6}rem`
      : '3rem'};
  height: ${({ width, borderColor }) =>
    width !== undefined
      ? borderColor !== undefined
        ? `${width - 0.8}rem`
        : `${width - 0.6}rem`
      : '3rem'};
`;

const ImgRow = styled.img<{ fill?: string }>`
  width: 1.8rem;
  height: auto;
`;

const BtnName = styled.span<{
  fontSize?: number;
  fontWeight?: number;
  fontColor?: string;
}>`
  margin-top: 0.1rem;
  font-size: ${({ fontSize }) =>
    fontSize !== undefined ? `${fontSize}rem` : '0.8rem'};
  font-weight: ${({ fontWeight }) =>
    fontWeight !== undefined ? `${fontWeight}` : '600'};
  color: ${({ fontColor }) =>
    fontColor !== undefined ? `${fontColor}` : '#666'};
`;
