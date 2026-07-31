import styled from "styled-components";

export const ErrorSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 100%;

  padding: 0.65rem 0.85rem;

  border-radius: 10px;

  background: rgba(239, 68, 68, 0.08);

  border: 1px solid rgba(239, 68, 68, 0.15);

  color: var(--error);

  font-size: 0.85rem;
  font-weight: 500;

  &::before {
    content: "⚠";
    flex-shrink: 0;
  }
`;
