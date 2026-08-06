import styled from "styled-components";
import Logo from "../Logo";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Container = styled.footer`
  width: 100%;

  margin-top: auto;

  padding: 2rem;

  background: var(--surface);

  border-top: 1px solid var(--border);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: var(--text-secondary);

    font-size: 1.4rem;

    transition: 0.2s ease;
  }

  a:hover {
    color: var(--primary);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: var(--text-secondary);
    font-weight: 500;
  }

  a:hover {
    color: var(--primary);
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Copyright = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <Container>
      <ContactSection>
        <Logo />

        <p>
          Organize projetos e acompanhe tarefas de forma simples e eficiente.
        </p>

        <SocialLinks>
          <Link to='https://github.com/muristop10' target="_blank"><FaGithub /></Link>
          <Link to='mailto:murilo.et@aluno.ifsc.edu.br' target="_blank"><SiGmail /></Link>
          <Link to='https://instagram.com/muristop10'
            target="_blank"
            rel="noopener noreferrer"><FaInstagram /></Link>
        </SocialLinks>
      </ContactSection>

      <FooterNav>
        <Link to="/projects">Projetos</Link>

        <Link to="/tasks">
          Minhas Tarefas
        </Link>

        <Link to="/profile">
          Perfil
        </Link>
      </FooterNav>

      <Copyright>
        © 2026 TaskFlow
        <br />
        Desenvolvido por Murilo Thomé
      </Copyright>
    </Container>
  );
};

export default Footer