import styled from '@emotion/styled';

type PinProps = {
  content: string;
  backgroundColor?: string;
  textColor?: string;
  onClick: () => void; // 상위 컴포넌트에서 함수 정의하여 넣어줄 것
};

const Pin = ({
  content,
  backgroundColor = '#37432D', // TODO: 나중에 디자인 기본 컬러로 변경
  textColor = 'ivory', // TODO: 나중에 디자인 기본 컬러로 변경
  onClick,
}: PinProps) => {
  // content가 10글자를 넘는 경우 축약
  return (
    <PinWrap className="pin-wrapper">
      <PinHead
        className="pin-head"
        backgroundColor={backgroundColor}
        textColor={textColor}
        onClick={onClick}
      >
        {content.length > 10 ? content.slice(0, 10) + '...' : content}
      </PinHead>
      <PinTail className="pin-tail" />
    </PinWrap>
  );
};

const PinWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  z-index: 100;
  &:hover {
    z-index: 1000;
    filter: brightness(150%);
  }
`;

const PinHead = styled.div<{
  backgroundColor?: string;
  textColor?: string;
}>`
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
`;

const PinTail = styled.div<{
  backgroundColor?: string;
}>`
  width: 1rem;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-top: 1rem solid ${props => props.backgroundColor};
`;

export default Pin;
