import { Link } from "react-router-dom";
import styled from "styled-components";

export const InAppTextLink = styled(Link)`
  color: var(--primary);

  font-size: 0.95rem;
  font-weight: 500;

  text-decoration: none;

  transition: all 0.2s ease;

  &:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }
`;