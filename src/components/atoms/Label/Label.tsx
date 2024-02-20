import styled from '@emotion/styled';

type LabelProps = {
  content: string;
  size?: string;
  color?: string;
  onClick?: () => void;
};

const Label = ({ size, color, content, onClick }: LabelProps) => {
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
  font-size: ${props => props.size || '1.5rem'};
  color: ${props => props.color || '#37432D'}; // TODO: 기본 컬러로 변경
  font-weight: 700;
`;
