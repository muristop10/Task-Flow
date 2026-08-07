import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import { useAuth } from "../../stores/userStore";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  max-width: 700px;
  margin: 0 auto;
  padding: 32px 16px;
  
  animation: fadeIn 0.4s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  h1 {
    color: var(--text-primary);
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const UserData = styled.section`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  box-shadow: var(--shadow);
  
  display: flex;
  flex-direction: column;
  gap: 16px;

  .info-group {
    display: flex;
    flex-direction: column;
    gap: 4px;

    span {
      color: var(--text-secondary);
      font-size: 0.85rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    h2 {
      color: var(--text-primary);
      font-size: 1.1rem;
      font-weight: 400;
      margin: 0;
    }
  }
`;

const EditSection = styled.section`
  &:not(:empty) {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
    box-shadow: var(--shadow);
    
    animation: fadeIn 0.3s ease-out;
  }
`;


const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false)

  return (
    <Container>
      <HeaderSection>
        <h1>Meu Perfil</h1>
        <Button variant="primary" onClick={() => {
          if (!isEdit) {
            navigate('editProfile')
            setIsEdit(true)
          } else {
            navigate('/profile')
            setIsEdit(false)
          }
        }}>
          Editar Informações
        </Button>
      </HeaderSection>

      <UserData>
        <div className="info-group">
          <span>Nome Completo</span>
          <h2>{user?.name || "Usuário não identificado"}</h2>
        </div>

        <div className="info-group">
          <span>Endereço de E-mail</span>
          <h2>{user?.email || "Sem e-mail cadastrado"}</h2>
        </div>
      </UserData>

      <EditSection>
        <Outlet context={{setIsEdit}}/>
      </EditSection>
    </Container>
  );
};

export default Profile;