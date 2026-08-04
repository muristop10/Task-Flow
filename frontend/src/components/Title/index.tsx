import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;

  margin-top: 32px;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;

  text-align: center;

  background: linear-gradient(
    135deg,
    var(--primary) 0%,
    #7c3aed 100%
  );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  text-shadow:
    0 8px 30px rgba(99, 102, 241, 0.15);

  margin-bottom: 1rem;

  animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1);

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;