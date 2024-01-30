import styled from '@emotion/styled';

type CafeAddressProps = {
  cafeAddress: string;
  width?: number;
  height?: number;
  fontSize?: number;
  fontColor?: string;
  background?: string;
};

const CafeAddress = ({
  cafeAddress,
  width,
  height,
  fontSize,
  fontColor,
  background,
}: CafeAddressProps) => {
  return (
    <CafeAddressWrap width={width} height={height} background={background}>
      <CafeAddressText fontSize={fontSize} fontColor={fontColor}>
        {cafeAddress}
      </CafeAddressText>
    </CafeAddressWrap>
  );
};

export default CafeAddress;

const CafeAddressWrap = styled.div<{
  width?: number;
  height?: number;
  background?: string;
}>`
  width: ${props => (props.width !== undefined ? `${props.width}rem` : 'auto')};
  height: ${props =>
    props.height !== undefined ? `${props.height}rem` : '3.28rem'};
  padding: 0.5rem 0.6rem;
  background: ${props =>
    props.background !== undefined ? props.background : '#eee'};
  border-radius: 0.5rem;
  overflow: hidden;
`;

const CafeAddressText = styled.p<{
  fontSize?: number;
  fontColor?: string;
}>`
  margin-bottom: -0.3rem;
  font-size: ${props =>
    props.fontSize !== undefined ? `${props.fontSize}rem` : '1rem'};
  color: ${props =>
    props.fontColor !== undefined ? `${props.fontColor}` : '#666'};
  line-height: 1.342rem;
`;
