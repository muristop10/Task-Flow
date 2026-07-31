import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 460px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2.5rem;

  background: var(--surface);

  border: 1px solid var(--border);

  border-radius: 24px;

  box-shadow: var(--shadow);

  transition: transform 0.2s ease,
              box-shadow 0.2s ease;

  &:hover {
    box-shadow: var(--shadow-hover);
  }

  h1,
  h2,
  h3 {
    font-family: "Poppins", sans-serif;

    color: var(--text-primary);

    text-align: center;

    font-size: 1.8rem;
    font-weight: 700;

    margin-bottom: 0.25rem;
  }

  p {
    color: var(--text-secondary);

    text-align: center;

    line-height: 1.6;

    font-size: 0.95rem;
  }

  label {
    color: var(--text-primary);

    font-weight: 600;

    font-size: 0.95rem;
  }

  section {
    display: flex;
    flex-direction: column;

    gap: 0.75rem;

    margin-top: 0.5rem;
  }

  @media (max-width: 640px) {
    padding: 2rem;

    border-radius: 20px;

    max-width: 100%;
  }
`;
