import styled from "styled-components"
import Button from "../Button"
import { useNavigate } from "react-router-dom"
import { EmphasisText } from "../EmphasisText"
import notFoundImg from '../../assets/404.png'

const Styled404 = styled.img`
  width: min(500px, 85vw);
  height: auto;

  object-fit: contain;

  filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.15));

  transition: transform 0.3s ease;

  animation: float 4s ease-in-out infinite;

  &:hover {
    transform: scale(1.03);
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-12px);
    }

    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    width: min(350px, 90vw);
  }
`;

const StyledSection = styled.section`
  min-height: calc(100vh - 160px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;

  padding: 2rem;

  text-align: center;
`;

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <StyledSection>
            <figure>
                <Styled404 src={notFoundImg} />
            </figure>

            <EmphasisText>Não encontramos nada aqui...</EmphasisText>
            <div>
                <Button variant="secondary"
                    onClick={() => navigate('/')}>Voltar à página principal</Button>
            </div>
        </StyledSection>
    )
}

export default NotFound
