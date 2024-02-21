import styled from '@emotion/styled';

type ButtonProps = {
  name?: string;
  imgUrl: string;
  imgAlt: string;
  width?: number;
  fontSize?: number;
  fontColor?: string;
  fontWeight?: number;
  onClick: () => void;
};

const Button = ({
  imgUrl,
  imgAlt,
  name,
  width,
  fontSize,
  fontColor,
  fontWeight,
  onClick,
}: ButtonProps) => {
  return (
    <Btn width={width} onClick={() => onClick()}>
      <Img width={width} src={imgUrl} alt={imgAlt} />
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

const Btn = styled.button<{ width?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${({ width }) => (width !== undefined ? `${width}rem` : '3.6rem')};
  border: none;
  background: none;
  cursor: pointer;
`;

const Img = styled.img<{ width?: number }>`
  width: ${({ width }) => (width !== undefined ? `${width}rem` : '3.6rem')};
  height: ${({ width }) => (width !== undefined ? `${width}rem` : '3.6rem')};
`;

const BtnName = styled.span<{
  fontSize?: number;
  fontWeight?: number;
  fontColor?: string;
}>`
  margin-top: 0.4rem;
  font-size: ${({ fontSize }) =>
    fontSize !== undefined ? `${fontSize}rem` : '1.2rem'};
  font-weight: ${({ fontWeight }) =>
    fontWeight !== undefined ? `${fontWeight}` : '600'};
  color: ${({ fontColor }) =>
    fontColor !== undefined ? `${fontColor}` : '#666'};
`;
