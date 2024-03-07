import styled from '@emotion/styled';
import { useState } from 'react';

type TextProps = {
  content: string;
  size?: string;
  color?: string;
  width?: number;
  height?: number;
  textAlign?: 'left' | 'right' | 'center';
  lengthLimit?: number;
  onClick?: () => void;
};

const Text = ({
  content,
  size,
  color,
  width,
  height,
  textAlign,
  lengthLimit,
  onClick,
}: TextProps) => {
  // onClick은 댓글, 카페 주소 등에서 기능이 필요하면 사용
  const [isExpanded, setIsExpanded] = useState(false);

  const onClickExpand = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <TextWrap width={width} height={height}>
      <TextContent
        size={size}
        color={color}
        textAlign={textAlign}
        onClick={onClick}
      >
        {!lengthLimit || content.length < lengthLimit
          ? content
          : isExpanded
            ? content
            : content.slice(0, lengthLimit) + '...'}
      </TextContent>
      {lengthLimit && content.length > lengthLimit ? (
        <ExpandButton size={size} onClick={onClickExpand}>
          {isExpanded ? '...접기' : '...더보기'}
        </ExpandButton>
      ) : null}
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
  flex-direction: column;
  width: ${({ width }) => (width !== undefined ? `${width}rem` : '100%')};
  height: ${({ height }) => (height !== undefined ? `${height}rem` : '100%')};
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

const ExpandButton = styled.button<{
  size?: string;
}>`
  font-size: ${props => props.size || '1rem'};
  background-color: transparent;
  color: #505050; // TODO: 디자인 기본 컬러 중 그레이스케일로 사용
  text-align: right;
  border: none;
  cursor: pointer;
`;
