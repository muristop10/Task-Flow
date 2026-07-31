import styled from "styled-components"

interface ButtonProps {
    variant: 'primary' | 'secondary' | 'submit' | 'error'
    onClick?: () => void;
    children: React.ReactNode;
    type?: 'submit'
}

const StyledButton = styled.button<{
  $variant: 'primary' | 'secondary' | 'submit' | 'error';
}>`
  min-width: 140px;
  height: 44px;

  padding: 0 1.25rem;

  border-radius: 12px;

  border: ${({ $variant }) =>
    $variant === 'secondary'
      ? '1px solid var(--border)'
      : 'none'};

  background: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return 'var(--primary)';

      case 'submit':
        return 'var(--success)';

      case 'error':
        return 'var(--error)';

      case 'secondary':
        return 'var(--surface)';
    }
  }};

  color: ${({ $variant }) =>
    $variant === 'secondary'
      ? 'var(--text-primary)'
      : '#fff'};

  font-size: 0.95rem;
  font-weight: 600;

  cursor: pointer;

  transition: all .2s ease;

  box-shadow: var(--shadow);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);

    background: ${({ $variant }) => {
      switch ($variant) {
        case 'primary':
          return 'var(--primary-dark)';

        case 'submit':
          return '#059669';

        case 'error':
          return '#DC2626';

        case 'secondary':
          return 'var(--background)';
      }
    }};
  }

  &:active {
    transform: scale(.98);
  }

  &:disabled {
    opacity: .6;
    cursor: not-allowed;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Button = ({
    variant,
    onClick,
    children,
    type
}: ButtonProps) => {
    return (
        <div>
            <StyledButton
                $variant={variant}
                onClick={onClick}
                type={type}>
                {children}
            </StyledButton>
        </div>
    )
}

export default Button
