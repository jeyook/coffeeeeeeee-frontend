import styled from '@emotion/styled';

type TextProps = {
  content: string;
  size?: string;
  color?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  textAlign?: 'left' | 'right' | 'center';
};

const Text = ({
  content,
  size,
  color,
  onClick,
  width,
  height,
  textAlign,
}: TextProps) => {
  // onClick은 댓글, 카페 주소 등에서 기능이 필요하면 사용
  return (
    <TextWrap width={width} height={height}>
      <TextContent
        size={size}
        color={color}
        textAlign={textAlign}
        onClick={onClick}
      >
        {content}
      </TextContent>
    </TextWrap>
  );
};

export default Text;

const TextWrap = styled.div<{
  width?: number;
  height?: number;
}>`
  // padding/margin/width/height는 부모 컴포넌트에서 설정하는 편이 좋을 것 같음
  display: flex;
  width: ${({ width }) => (width !== undefined ? `${width}rem` : '100%')};
  height: ${({ height }) => (height !== undefined ? `${height}rem` : '100%')};
  overflow-y: 'auto';
`;

const TextContent = styled.p<{
  size?: string;
  color?: string;
  textAlign?: string;
}>`
  font-size: ${props => props.size || '1rem'};
  color: ${props =>
    props.color
      ? props.color
      : undefined}; // 입력된 색상 없는 경우 글로벌 기본 컬러 적용 globals.css --foreground-rgb
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
`;
