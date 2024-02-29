import styled from '@emotion/styled';

type InputProps = {
  fontSize?: string;
  placeholder?: string;
  borderRadius?: string;
  color?: string;
  onChange: (event: any) => void;
};

const Input = ({
  fontSize,
  placeholder,
  borderRadius,
  onChange,
  color,
}: InputProps) => {
  return (
    <InputWrap>
      <InputBox
        fontSize={fontSize}
        onChange={onChange}
        borderRadius={borderRadius}
        placeholder={placeholder}
        color={color}
      ></InputBox>
    </InputWrap>
  );
};

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InputBox = styled.input<{
  fontSize?: string;
  borderRadius?: string;
  color?: string;
}>`
  border-radius: ${props => props.borderRadius || '0'};
  padding: 0.5rem 1rem;
  font-size: ${props => props.fontSize || '1rem'};
  color: ${props => props.color};
  width: 100%;
`;

export default Input;
