import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import type { iUser } from "../../schemas/user.schema";
import { useAuth } from "../../stores/userStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: max-content;
  max-width: 100%;
`;

const TriggerButton = styled.button<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 14px;
  
  transition: all .2s ease;

  /* --- ESTILOS MOBILE (Padrão) --- */
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);

  /* --- ESTILOS DESKTOP (A partir de 768px) --- */
  @media (min-width: 768px) {
    background: ${({ $isOpen }) => ($isOpen ? "var(--surface)" : "transparent")};
    border: 1px solid ${({ $isOpen }) => ($isOpen ? "var(--border)" : "transparent")};
    box-shadow: ${({ $isOpen }) => ($isOpen ? "var(--shadow)" : "none")};

    &:hover {
      background: var(--surface);
      border-color: var(--border);
      box-shadow: var(--shadow-hover);
      transform: translateY(-2px);
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    margin: 0;
    color: var(--text-primary);
    font-size: .95rem;
    font-weight: 600;
  }

  small {
    color: var(--text-secondary);
    font-size: .8rem;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const ChevronIcon = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const DropdownMenu = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  
  min-width: 200px;
  
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: var(--shadow-hover);
  
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-10px)")};
  transition: all 0.2s ease;
  z-index: 50;
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  
  color: var(--text-primary);
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 8px;
  text-align: left;
  
  transition: all 0.2s ease;

  &:hover {
    background: var(--background);
    color: var(--primary);
  }

  &.danger {
    color: var(--error);
    &:hover {
      background: #ef444415;
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  background: var(--border);
  margin: 4px 0;
`;

const UserMenu = ({ user }: { user: iUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLogout() {
    try {
      logout()
      toast.success('Logout feito com sucesso!')
      navigate('/')
    } catch (e) {
      toast.error('Erro ao fazer logout.')
      console.log(e)
    }
  }

  return (
    <Container ref={menuRef}>
      <TriggerButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <UserInfo>
          <h3>{user.name}</h3>
          <small>{user.email || "user@email.com"}</small>
        </UserInfo>

        <ChevronIcon $isOpen={isOpen}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </ChevronIcon>
      </TriggerButton>

      <DropdownMenu $isOpen={isOpen}>
        <li>
          <MenuItem onClick={() => {
            navigate('/profile')
            setIsOpen(false)
          }}>
            Meu Perfil
          </MenuItem>
        </li>
        <li>
          <MenuItem onClick={() => {
            navigate('/settings')
            setIsOpen(false)
          }}>
            Configurações
          </MenuItem>
        </li>
        <Divider />
        <li>
          <MenuItem className="danger" onClick={handleLogout}>
            Sair
          </MenuItem>
        </li>
      </DropdownMenu>
    </Container>
  );
};

export default UserMenu;

