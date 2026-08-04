import styled from "styled-components";

export const Select = styled.select`
  width: 100%;

  padding: 0.9rem 1rem;
  border-radius: 14px;

  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-primary);

  font-size: 0.95rem;
  font-weight: 500;

  outline: none;
  cursor: pointer;

  transition: all 0.3s ease;
  box-shadow: var(--shadow);

  &:hover {
    border-color: var(--primary);
  }

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
  }

  option {
    background: var(--surface);
    color: var(--text-primary);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;