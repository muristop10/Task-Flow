import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import Button from "../Button";
import { useAuth } from "../../stores/userStore";
import UserMenu from "../UserMenu";

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

  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <Container>
      <Logo />

      <nav>
        <NavLinks>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
          <li><Link to="/tasks">Tarefas</Link></li>
          <li><Link to="/profile">Perfil</Link></li>
          <li><Link to="/settings">Configurações</Link></li>
        </NavLinks>
      </nav>

      {!user ? (
        <AuthLinks>
          <li>
            <Button onClick={() => navigate('/login')}
              variant="secondary">Login</Button>
          </li>
          <li>
            <Button onClick={() => navigate('/register')}
              variant="primary">Cadastre-se já</Button>
          </li>
        </AuthLinks>
      ) : (
        <UserMenu user={user} />
      )}
    </Container>
  );
};

export default Header;