import styled from '@emotion/styled';

type SelectBoxProps = {
  fontSize?: string;
  borderRadius?: string;
  defultValue?: boolean; // all은 전체선택, 값이 없으면 선택하세요 표시
  id?: string;
  name?: string;
  disabled?: boolean; // true시 disabled처리 값이 없거나 false일때는 사용가능
  options: Record<string, any>;
  onChange: (event: any) => void;
};

const SelectBox = ({
  fontSize,
  borderRadius,
  defultValue,
  id,
  name,
  disabled,
  options,
  onChange,
}: SelectBoxProps) => {
  return (
    <SelectBoxWrap>
      <SelectBoxBox
        fontSize={fontSize}
        onChange={onChange}
        borderRadius={borderRadius}
        disabled={disabled}
        id={id}
        name={name}
      >
        {defultValue ? (
          <option value="99">전체선택</option>
        ) : (
          <option value="0">선택해주세요</option>
        )}
        {Object.entries(options).map(([key, value]) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </SelectBoxBox>
    </SelectBoxWrap>
  );
};

const SelectBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

const SelectBoxBox = styled.select<{
  fontSize?: string;
  borderRadius?: string;
}>`
  border-radius: ${props => props.borderRadius || '0'};
  padding: 0.5rem 1rem;
  font-size: ${props => props.fontSize || '1rem'};
`;

export default SelectBox;
