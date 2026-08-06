import React from 'react'
import styled from 'styled-components';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const ErrorContainer = styled.div`
  min-height: 60vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  text-align: center;
`;

const ErrorTitle = styled.h2`
  color: var(--error);
  font-size: 2rem;
`;

const ErrorText = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
`;

const ErrorQuery = () => {

    const navigate = useNavigate()

    return (
        <ErrorContainer>
            <ErrorTitle>Oops! 😕</ErrorTitle>

            <ErrorText>
                Não foi possível carregar os projetos.
            </ErrorText>

            <Button variant="error" onClick={() => navigate("/")}>
                Voltar para o início
            </Button>
        </ErrorContainer>
    );
}

export default ErrorQuery
