import styled from '@emotion/styled';

type LabelProps = {
  content: string;
  size?: string;
  color?: string;
  onClick?: () => void;
};

const Label = ({
  content,
  size = '1.5rem',
  color = '#37432D',
  onClick,
}: LabelProps) => {
  // TODO: color 기본값을 디자인 기본 컬러로 변경
  // onClick은 유저 이름, 카페 이름 등에서 기능이 필요하면 사용
  return (
    <LabelWrap size={size} color={color} onClick={onClick}>
      {content}
    </LabelWrap>
  );
};

export default Label;

const LabelWrap = styled.div<{
  size?: string;
  color?: string;
}>`
  // padding/margin은 Label을 사용하는 wrapper에서 설정하는 편이 좋을 것 같음
  display: flex;
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: 700;
`;
