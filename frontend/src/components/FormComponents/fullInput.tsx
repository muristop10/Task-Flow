import styled from 'styled-components'

interface FullInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const StyledLabel = styled.label`
  display: block;

  margin-bottom: 0.5rem;

  color: var(--text-primary);

  font-size: 0.95rem;
  font-weight: 600;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 48px;

  padding: 0 1rem;

  border-radius: 12px;

  border: 1px solid var(--border);

  background: var(--surface);
  color: var(--text-primary);

  font-size: 0.95rem;

  transition: all 0.2s ease;

  box-shadow: var(--shadow);

  &::placeholder {
    color: var(--text-secondary);
  }

  &:hover {
    border-color: var(--primary);
  }

  &:focus {
    outline: none;

    border-color: var(--primary);

    box-shadow:
      0 0 0 4px rgba(99, 102, 241, 0.15);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--text-primary);
    -webkit-box-shadow: 0 0 0 1000px var(--surface) inset;
    transition: background-color 9999s ease-in-out 0s;
  }
`;

const FullInput = ({
  label,
  id,
  ...rest
}: FullInputProps) => {
  return (
    <div>
      <StyledLabel htmlFor={id}>
        {label}
      </StyledLabel>

      <StyledInput
        id={id}
        name={id}
        {...rest}
      />
    </div>
  );
};

export default FullInput;