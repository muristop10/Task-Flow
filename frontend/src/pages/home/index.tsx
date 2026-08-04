import styled from 'styled-components';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../components/Title';

const PageWrapper = styled.div`
  background-color: var(--background);
  color: var(--text-primary);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

/* Buttons */
const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

/* Hero Section */
const HeroSection = styled.section`
  text-align: center;
  padding: 5rem 1rem 4rem;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.25rem;
  line-height: 1.15;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1.25rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

/* Benefits Section */
const BenefitsSection = styled.section`
  padding: 4rem 0;
  width: 100%;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 2.5rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--primary);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
`;

/* Demo Section */
const DemoSection = styled.section`
  padding: 4rem 0;
  width: 100%;
`;

const DemoBoardWrapper = styled.div`
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
`;

const ProjectTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
`;

const ProjectBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--success);
  border: 1px solid var(--success);
  padding: 0.25rem 0.6rem;
  border-radius: 1rem;
`;

const KanbanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const KanbanColumn = styled.div`
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 1rem;
`;

const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ColumnTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ColumnBadge = styled.span`
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  border-radius: 1rem;
  background-color: var(--surface);
  color: var(--text-secondary);
  border: 1px solid var(--border);
`;

const TaskCard = styled.div`
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  padding: 1rem;
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TaskTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const TaskTag = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.15rem 0.4rem;
  border-radius: 0.25rem;

  &.warning {
    color: var(--warning);
    border: 1px solid var(--warning);
  }

  &.primary {
    color: var(--primary);
    border: 1px solid var(--primary);
  }

  &.success {
    color: var(--success);
    border: 1px solid var(--success);
  }
`;

/* CTA Section */
const CTASection = styled.section`
  padding: 6rem 1rem;
  width: 100%;
`;

const CTACard = styled.div`
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
`;

const CTATitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;


export default function TaskFlowLandingPage() {

  const navigate = useNavigate()

  return (
    <PageWrapper>
      <Container>
        {/* 1. HERO SECTION */}
        <Title>
          Explorando o ecossistema moderno do React.
        </Title>

        <HeroSubtitle>
          Um projeto desenvolvido para praticar gerenciamento de estado,
          formulários, validação de dados, requisições assíncronas e boas
          práticas utilizando as principais bibliotecas do mercado.
        </HeroSubtitle>

        {/* 2. BENEFÍCIOS */}
        <CardsGrid>
          <BenefitCard>
            <CardTitle>TanStack Query</CardTitle>
            <CardDescription>
              Gerenciamento de estado assíncrono, cache inteligente,
              sincronização automática e controle de requisições com uma API simples
              e performática.
            </CardDescription>
          </BenefitCard>

          <BenefitCard>
            <CardTitle>React Hook Form</CardTitle>
            <CardDescription>
              Criação de formulários performáticos com mínimo de re-renderizações,
              simplificando validações e manipulação de estados.
            </CardDescription>
          </BenefitCard>

          <BenefitCard>
            <CardTitle>Zod</CardTitle>
            <CardDescription>
              Validação de dados e tipagem segura através de schemas,
              garantindo maior confiabilidade nas entradas do usuário.
            </CardDescription>
          </BenefitCard>

          <BenefitCard>
            <CardTitle>Zustand</CardTitle>
            <CardDescription>
              Gerenciamento de estado global leve, intuitivo e sem boilerplate,
              ideal para aplicações React modernas.
            </CardDescription>
          </BenefitCard>

          <BenefitCard>
            <CardTitle>Sonner</CardTitle>
            <CardDescription>
              Sistema elegante de notificações toast para feedbacks rápidos,
              melhorando a experiência do usuário durante as interações.
            </CardDescription>
          </BenefitCard>

          <BenefitCard>
            <CardTitle>TypeScript</CardTitle>
            <CardDescription>
              Tipagem estática que aumenta a produtividade, reduz erros e
              melhora a manutenção e escalabilidade do código.
            </CardDescription>
          </BenefitCard>
        </CardsGrid>

        {/* 3. DEMONSTRAÇÃO VISUAL */}
        <DemoSection>
          <SectionHeader>
            <SectionTitle>Stack utilizada na aplicação</SectionTitle>
          </SectionHeader>
          <DemoBoardWrapper>
            <BoardHeader>
              <ProjectTitle>Projeto de Estudos React + TypeScript</ProjectTitle>
              <ProjectBadge>Frontend Moderno</ProjectBadge>
            </BoardHeader>

            <KanbanGrid>
              {/* Coluna A Fazer */}
              <KanbanColumn>
                <ColumnHeader>
                  <ColumnTitle>A Fazer</ColumnTitle>
                  <ColumnBadge>2</ColumnBadge>
                </ColumnHeader>
                <TaskCard>
                  <TaskTitle>Mapear jornada do usuário</TaskTitle>
                  <TaskTag className="warning">Atenção</TaskTag>
                </TaskCard>
                <TaskCard>
                  <TaskTitle>Definir guia de estilos</TaskTitle>
                  <TaskTag className="primary">Design</TaskTag>
                </TaskCard>
              </KanbanColumn>

              {/* Coluna Em Andamento */}
              <KanbanColumn>
                <ColumnHeader>
                  <ColumnTitle>Em Andamento</ColumnTitle>
                  <ColumnBadge>1</ColumnBadge>
                </ColumnHeader>
                <TaskCard>
                  <TaskTitle>Criar componentes da Landing Page</TaskTitle>
                  <TaskTag className="primary">Dev</TaskTag>
                </TaskCard>
              </KanbanColumn>

              {/* Coluna Concluído */}
              <KanbanColumn>
                <ColumnHeader>
                  <ColumnTitle>Concluído</ColumnTitle>
                  <ColumnBadge>2</ColumnBadge>
                </ColumnHeader>
                <TaskCard>
                  <TaskTitle>Alinhamento inicial do projeto</TaskTitle>
                  <TaskTag className="success">Feito</TaskTag>
                </TaskCard>
                <TaskCard>
                  <TaskTitle>Aprovação do orçamento</TaskTitle>
                  <TaskTag className="success">Feito</TaskTag>
                </TaskCard>
              </KanbanColumn>
            </KanbanGrid>
          </DemoBoardWrapper>
        </DemoSection>

        {/* 4. CTA FINAL */}
        <CTASection>
          <CTACard>
            <CTATitle>Pronto para aumentar sua produtividade?</CTATitle>
            <Button variant='primary' onClick={() => navigate('/register')}>Criar Conta</Button>
          </CTACard>
        </CTASection>
      </Container>
    </PageWrapper>
  );
}