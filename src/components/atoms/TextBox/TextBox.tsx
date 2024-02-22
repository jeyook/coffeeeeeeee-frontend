import styled from '@emotion/styled';

type TextBoxProps = {
  fontSize?: string;
  placeholder?: string;
  borderRadius?: string;
  color?: string;
  resize?: boolean;
  maxLength?: number;
  onChange: (event: any) => void;
};

const TextBox = ({
  fontSize,
  placeholder,
  borderRadius,
  onChange,
  color,
  resize,
  maxLength,
}: TextBoxProps) => {
  return (
    <TextBoxWrap>
      <TextAreaBox
        fontSize={fontSize}
        onChange={onChange}
        borderRadius={borderRadius}
        placeholder={placeholder}
        color={color}
        resize={resize}
        maxLength={maxLength ? maxLength : 100}
      ></TextAreaBox>
    </TextBoxWrap>
  );
};

const TextBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

const TextAreaBox = styled.textarea<{
  fontSize?: string;
  borderRadius?: string;
  color?: string;
  resize?: boolean;
}>`
  border-radius: ${props => props.borderRadius || '0'};
  padding: 0.5rem 1rem;
  font-size: ${props => props.fontSize || '1rem'};
  color: ${props => props.color};
  resize: ${props => (props.resize === false ? 'none' : 'auto')};
`;

export default TextBox;
