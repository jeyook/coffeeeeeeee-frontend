import styled from '@emotion/styled';

//width, height, fontsize, fontcolor, fontweight 디자인 나오면 수정

type CafeNameProps = {
  cafeName: string;
  width?: number;
  height?: number;
  fontSize?: number;
  fontColor?: string;
  fontWeight?: number;
};

const CafeName = ({
  cafeName,
  width,
  height,
  fontSize,
  fontColor,
  fontWeight,
}: CafeNameProps) => {
  return (
    <CafeNameWrap width={width} height={height}>
      <CafeNameText
        fontSize={fontSize}
        fontColor={fontColor}
        fontWeight={fontWeight}
      >
        {cafeName}
      </CafeNameText>
    </CafeNameWrap>
  );
};

export default CafeName;

const CafeNameWrap = styled.div<{ width?: number; height?: number }>`
  display: flex;
  align-items: center;
  width: ${props => (props.width !== undefined ? `${props.width}rem` : 'auto')};
  height: ${props =>
    props.height !== undefined ? `${props.height}rem` : 'auto'};
  border-radius: 0.5rem;
`;

const CafeNameText = styled.p<{
  fontSize?: number;
  fontColor?: string;
  fontWeight?: number;
}>`
  font-size: ${props =>
    props.fontSize !== undefined ? `${props.fontSize}rem` : '1rem'};
  font-weight: ${props =>
    props.fontWeight !== undefined ? `${props.fontWeight}` : '400'};
  color: ${props =>
    props.fontColor !== undefined ? `${props.fontColor}` : '#666'};
`;
