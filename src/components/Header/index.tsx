import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Container = styled.header`
  width: 100%;
  height: 72px;

  background: var(--surface);

  border-bottom: 1px solid var(--border);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;

  position: sticky;
  top: 0;

  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
    gap: 1rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  list-style: none;

  a {
    color: var(--text-secondary);
    font-weight: 500;

    transition: 0.2s;

    &:hover {
      color: var(--primary);
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const AuthLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  list-style: none;

  a {
    color: var(--text-primary);
    font-weight: 600;

    transition: 0.2s;

    &:hover {
      color: var(--primary);
    }
  }
`;

const Header = () => {
    return (
        <Container>
            <Logo />

            <nav>
                <NavLinks>
                    <li><Link to="/projects">Projetos</Link></li>
                    <li><Link to="/tasks">Tarefas</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/settings">Configurações</Link></li>
                </NavLinks>
            </nav>

            <AuthLinks>
                <li>
                    <Link to="/login">Login</Link>
                </li>

                <li>
                    <Link to="/register">
                        Cadastre-se
                    </Link>
                </li>
            </AuthLinks>
        </Container>
    );
};

export default Header;