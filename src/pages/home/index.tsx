import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

/* ==========================================================================
   1. GLOBAL STYLES & THEMING
   ========================================================================== */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap');

  :root {
    --primary: #6366F1;
    --primary-dark: #4F46E5;
    --bg: #F8FAFC;
    --surface: #FFFFFF;
    --text-primary: #0F172A;
    --text-secondary: #64748B;
    --border: #E2E8F0;
    --success: #10B981;
    --error: #EF4444;
    --warning: #F59E0B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }
`;

/* ==========================================================================
   2. STYLED COMPONENTS
   ========================================================================== */

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

// BUTTONS
const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${(props) => (props.$large ? '14px 28px' : '10px 20px')};
  font-size: ${(props) => (props.$large ? '1.05rem' : '0.95rem')};
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;

  ${(props) =>
    props.$primary
      ? `
    background-color: var(--primary);
    color: #FFFFFF;
    border: 1px solid var(--primary);
    box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);

    &:hover {
      background-color: var(--primary-dark);
      border-color: var(--primary-dark);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
    }
  `
      : props.$outline
      ? `
    background-color: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border);

    &:hover {
      border-color: var(--text-secondary);
      background-color: var(--surface);
      transform: translateY(-2px);
    }
  `
      : `
    background-color: transparent;
    color: var(--text-primary);
    &:hover {
      color: var(--primary);
    }
  `}
`;

// HEADER
const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(248, 250, 252, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;

  span {
    color: var(--primary);
  }
`;

const LogoIcon = styled.div`
  width: 34px;
  height: 34px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: var(--text-primary);
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// HERO SECTION
const Hero = styled.section`
  padding: 100px 0 80px;
  text-align: center;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 50px;
  color: var(--primary-dark);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 24px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: var(--text-primary);
  max-width: 800px;
  margin: 0 auto 20px;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 620px;
  margin: 0 auto 36px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroCTA = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 60px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

// MOCKUP GRAPHICS (CSS-driven modern UI)
const MockupFrame = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
`;

const MockupHeader = styled.div`
  background: #F1F5F9;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid var(--border);
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.$color || '#CBD5E1'};
`;

const MockupBody = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  min-height: 480px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  background: #F8FAFC;
  border-right: 1px solid var(--border);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 850px) {
    display: none;
  }
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.88rem;
  font-weight: 500;
  color: ${(props) => (props.$active ? 'var(--primary)' : 'var(--text-secondary)')};
  background: ${(props) => (props.$active ? 'rgba(99, 102, 241, 0.1)' : 'transparent')};
`;

const KanbanBoard = styled.div`
  padding: 24px;
  background: #FAFAFA;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  overflow-x: auto;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const KanbanColumn = styled.div`
  background: #F1F5F9;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ColumnTitle = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskCard = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

const Tag = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.72rem;
  font-weight: 600;
  margin-bottom: 8px;
  background: ${(props) => props.$bg || 'rgba(99, 102, 241, 0.1)'};
  color: ${(props) => props.$color || 'var(--primary)'};
`;

const TaskTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary);
`;

const TaskMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.78rem;
  color: var(--text-secondary);
  margin-top: 10px;
`;

const Avatar = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${(props) => props.$bg || 'var(--primary)'};
  color: white;
  font-size: 0.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

// SECTIONS GENERAL
const Section = styled.section`
  padding: 100px 0;
  ${(props) => props.$white && `background: var(--surface);`}
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 650px;
  margin: 0 auto 60px;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
`;

// BENEFITS
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
`;

const Card = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 32px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);
    border-color: rgba(99, 102, 241, 0.4);
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

// HOW IT WORKS
const Timeline = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  position: relative;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const Step = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px 24px;
  position: relative;
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.25);
`;

// TESTIMONIALS
const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Stars = styled.div`
  color: var(--warning);
  font-size: 1.1rem;
  margin-bottom: 16px;
`;

const TestimonialQuote = styled.p`
  font-size: 1rem;
  color: var(--text-primary);
  font-style: italic;
  margin-bottom: 24px;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AuthorInfo = styled.div`
  h5 {
    font-size: 0.95rem;
    font-weight: 600;
  }
  p {
    font-size: 0.8rem;
    color: var(--text-secondary);
  }
`;

// FAQ
const FAQContainer = styled.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FAQItem = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.2s;

  ${(props) => props.$isOpen && `border-color: var(--primary);`}
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 20px 24px;
  text-align: left;
  background: none;
  border: none;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
`;

const FAQAnswer = styled.div`
  padding: 0 24px 20px;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
`;

// CTA FINAL
const CTASection = styled.section`
  padding: 80px 0;
`;

const CTABox = styled.div`
  background: linear-gradient(135deg, #4F46E5 0%, #6366F1 100%);
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  color: white;
  box-shadow: 0 20px 40px rgba(79, 70, 229, 0.3);
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #ffffff;
`;

const CTASubtitle = styled.p`
  font-size: 1.15rem;
  opacity: 0.9;
  max-width: 580px;
  margin: 0 auto 32px;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 16px 36px;
  background-color: #ffffff;
  color: var(--primary-dark);
  font-weight: 700;
  font-size: 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    background-color: #F8FAFC;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

// FOOTER
const FooterWrapper = styled.footer`
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding: 60px 0 30px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FooterBrand = styled.div`
  p {
    margin-top: 12px;
    color: var(--text-secondary);
    font-size: 0.9rem;
    max-width: 280px;
  }
`;

const FooterColumn = styled.div`
  h4 {
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--text-primary);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s;

    &:hover {
      color: var(--primary);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid var(--border);
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--text-secondary);

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }
`;

/* ==========================================================================
   3. COMPONENTE PRINCIPAL
   ========================================================================== */

export default function TaskFlowLandingPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      q: "O TaskFlow é gratuito?",
      a: "Sim! Oferecemos um plano 100% gratuito que inclui até 3 quadros Kanban, membros ilimitados e todos os recursos básicos para organizar suas tarefas."
    },
    {
      q: "Posso usar sozinho?",
      a: "Com certeza. O TaskFlow foi desenhado tanto para produtividade pessoal quanto para grandes equipes de tecnologia e negócios."
    },
    {
      q: "Funciona para equipes?",
      a: "Sim! Você pode convidar membros, atribuir responsáveis, comentar em cards e acompanhar em tempo real as atualizações do time."
    },
    {
      q: "Meus dados ficam seguros?",
      a: "A segurança é nossa prioridade. Utilizamos criptografia ponta a ponta (AES-256) e servidores de alta disponibilidade para proteger suas informações."
    },
    {
      q: "Existe limite de projetos?",
      a: "No plano Gratuito você pode criar até 3 projetos ativos. Nos planos Pro e Enterprise os projetos são completamente ilimitados."
    }
  ];

  return (
    <>
      <GlobalStyle />

      {/* 1. HEADER FIXO */}
      <HeaderWrapper>
        <Container>
          <Nav>
            <Logo href="#">
              <LogoIcon>T</LogoIcon>
              Task<span>Flow</span>
            </Logo>
            <NavLinks>
              <NavLink href="#recursos">Recursos</NavLink>
              <NavLink href="#beneficios">Benefícios</NavLink>
              <NavLink href="#depoimentos">Depoimentos</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
            </NavLinks>
            <NavActions>
              <Button href="#login">Entrar</Button>
              <Button href="#signup" $primary>Começar Gratuitamente</Button>
            </NavActions>
          </Nav>
        </Container>
      </HeaderWrapper>

      {/* 2. HERO SECTION */}
      <Hero>
        <Container>
          <Badge>✨ TaskFlow 2.0 Lançado — Conheça as Novidades</Badge>
          <HeroTitle>Organize projetos sem complicação.</HeroTitle>
          <HeroSubtitle>
            Gerencie tarefas, acompanhe o progresso da equipe e mantenha tudo sob controle em um único lugar.
          </HeroSubtitle>
          <HeroCTA>
            <Button href="#signup" $primary $large>
              Começar Gratuitamente
            </Button>
            <Button href="#demo" $outline $large>
              Ver Demonstração
            </Button>
          </HeroCTA>

          {/* MOCKUP DO DASHBOARD */}
          <MockupFrame id="demo">
            <MockupHeader>
              <Dot $color="#EF4444" />
              <Dot $color="#F59E0B" />
              <Dot $color="#10B981" />
            </MockupHeader>
            <MockupBody>
              <Sidebar>
                <SidebarItem $active>📊 Visão Geral</SidebarItem>
                <SidebarItem>📋 Meu Quadro</SidebarItem>
                <SidebarItem>📅 Cronograma</SidebarItem>
                <SidebarItem>👥 Membros</SidebarItem>
                <SidebarItem>⚙️ Configurações</SidebarItem>
              </Sidebar>
              <KanbanBoard>
                {/* Coluna 1 */}
                <KanbanColumn>
                  <ColumnTitle>A Fazer <span>3</span></ColumnTitle>
                  <TaskCard>
                    <Tag $bg="rgba(239, 68, 68, 0.1)" $color="#EF4444">Urgente</Tag>
                    <TaskTitle>Redesenhar fluxo de onboarding</TaskTitle>
                    <TaskMeta>
                      <span>📅 Hoje</span>
                      <Avatar $bg="#6366F1">AM</Avatar>
                    </TaskMeta>
                  </TaskCard>
                  <TaskCard>
                    <Tag $bg="rgba(245, 158, 11, 0.1)" $color="#F59E0B">Design</Tag>
                    <TaskTitle>Criar protótipo das telas SaaS</TaskTitle>
                    <TaskMeta>
                      <span>📅 Amanhã</span>
                      <Avatar $bg="#10B981">PL</Avatar>
                    </TaskMeta>
                  </TaskCard>
                </KanbanColumn>

                {/* Coluna 2 */}
                <KanbanColumn>
                  <ColumnTitle>Em Andamento <span>2</span></ColumnTitle>
                  <TaskCard>
                    <Tag $bg="rgba(99, 102, 241, 0.1)" $color="#6366F1">Dev</Tag>
                    <TaskTitle>Integrar API de pagamento</TaskTitle>
                    <TaskMeta>
                      <span>📅 Em dia</span>
                      <Avatar $bg="#8B5CF6">CR</Avatar>
                    </TaskMeta>
                  </TaskCard>
                  <TaskCard>
                    <Tag $bg="rgba(99, 102, 241, 0.1)" $color="#6366F1">Dev</Tag>
                    <TaskTitle>Ajustar responsividade do dashboard</TaskTitle>
                    <TaskMeta>
                      <span>📅 Em dia</span>
                      <Avatar $bg="#EC4899">FS</Avatar>
                    </TaskMeta>
                  </TaskCard>
                </KanbanColumn>

                {/* Coluna 3 */}
                <KanbanColumn>
                  <ColumnTitle>Concluído <span>4</span></ColumnTitle>
                  <TaskCard>
                    <Tag $bg="rgba(16, 185, 129, 0.1)" $color="#10B981">Sucesso</Tag>
                    <TaskTitle>Aprovação do layout no Figma</TaskTitle>
                    <TaskMeta>
                      <span>✅ Concluído</span>
                      <Avatar $bg="#10B981">AM</Avatar>
                    </TaskMeta>
                  </TaskCard>
                </KanbanColumn>
              </KanbanBoard>
            </MockupBody>
          </MockupFrame>
        </Container>
      </Hero>

      {/* 3. SEÇÃO DE BENEFÍCIOS */}
      <Section id="beneficios" $white>
        <Container>
          <SectionHeader>
            <SectionTitle>Por que escolher o TaskFlow?</SectionTitle>
            <SectionDescription>
              Tudo o que você precisa para manter seu fluxo de trabalho organizado e eficiente.
            </SectionDescription>
          </SectionHeader>
          <Grid>
            <Card>
              <CardIcon>📋</CardIcon>
              <CardTitle>Organização Inteligente</CardTitle>
              <CardText>
                Organize tarefas em quadros e listas intuitivas com visualização clara de prioridades.
              </CardText>
            </Card>
            <Card>
              <CardIcon>⚡</CardIcon>
              <CardTitle>Produtividade Aumentada</CardTitle>
              <CardText>
                Elimine distrações e foque no que realmente importa com fluxos simplificados.
              </CardText>
            </Card>
            <Card>
              <CardIcon>👥</CardIcon>
              <CardTitle>Colaboração em Equipe</CardTitle>
              <CardText>
                Trabalhe junto com sua equipe sem perder o contexto das conversas e prazos.
              </CardText>
            </Card>
            <Card>
              <CardIcon>📊</CardIcon>
              <CardTitle>Progresso Visual</CardTitle>
              <CardText>
                Veja exatamente o andamento dos projetos através de relatórios e painéis dinâmicos.
              </CardText>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* 4. SEÇÃO COMO FUNCIONA */}
      <Section id="recursos">
        <Container>
          <SectionHeader>
            <SectionTitle>Como o TaskFlow funciona</SectionTitle>
            <SectionDescription>
              Quatro passos simples para transformar a maneira como você gerencia seus projetos.
            </SectionDescription>
          </SectionHeader>
          <Timeline>
            <Step>
              <StepNumber>1</StepNumber>
              <CardTitle>Crie um projeto</CardTitle>
              <CardText>Dê um nome ao seu projeto e convide os membros da sua equipe em segundos.</CardText>
            </Step>
            <Step>
              <StepNumber>2</StepNumber>
              <CardTitle>Organize tarefas</CardTitle>
              <CardText>Adicione cards Kanban, defina prazos, etiquetas e responsáveis.</CardText>
            </Step>
            <Step>
              <StepNumber>3</StepNumber>
              <CardTitle>Acompanhe o progresso</CardTitle>
              <CardText>Mova os cards entre as colunas conforme o trabalho avança em tempo real.</CardText>
            </Step>
            <Step>
              <StepNumber>4</StepNumber>
              <CardTitle>Entregue resultados</CardTitle>
              <CardText>Finalize dentro do prazo e celebre as conquistas com sua equipe.</CardText>
            </Step>
          </Timeline>
        </Container>
      </Section>

      {/* 6. DEPOIMENTOS */}
      <Section id="depoimentos" $white>
        <Container>
          <SectionHeader>
            <SectionTitle>Aprovado por equipes modernas</SectionTitle>
            <SectionDescription>
              Veja o que nossos usuários estão dizendo sobre o TaskFlow.
            </SectionDescription>
          </SectionHeader>
          <TestimonialsGrid>
            <TestimonialCard>
              <div>
                <Stars>⭐⭐⭐⭐⭐</Stars>
                <TestimonialQuote>
                  "Finalmente encontrei uma ferramenta simples e poderosa."
                </TestimonialQuote>
              </div>
              <Author>
                <Avatar $bg="#6366F1">MC</Avatar>
                <AuthorInfo>
                  <h5>Mariana Costa</h5>
                  <p>Product Manager</p>
                </AuthorInfo>
              </Author>
            </TestimonialCard>

            <TestimonialCard>
              <div>
                <Stars>⭐⭐⭐⭐⭐</Stars>
                <TestimonialQuote>
                  "Minha equipe se organizou em poucos dias."
                </TestimonialQuote>
              </div>
              <Author>
                <Avatar $bg="#10B981">RF</Avatar>
                <AuthorInfo>
                  <h5>Rodrigo Ferreira</h5>
                  <p>Líder Técnico</p>
                </AuthorInfo>
              </Author>
            </TestimonialCard>

            <TestimonialCard>
              <div>
                <Stars>⭐⭐⭐⭐⭐</Stars>
                <TestimonialQuote>
                  "Visual incrível e produtividade muito maior."
                </TestimonialQuote>
              </div>
              <Author>
                <Avatar $bg="#F59E0B">BA</Avatar>
                <AuthorInfo>
                  <h5>Beatriz Almeida</h5>
                  <p>Designer UX/UI</p>
                </AuthorInfo>
              </Author>
            </TestimonialCard>
          </TestimonialsGrid>
        </Container>
      </Section>

      {/* 7. FAQ */}
      <Section id="faq">
        <Container>
          <SectionHeader>
            <SectionTitle>Perguntas Frequentes</SectionTitle>
            <SectionDescription>
              Tire suas dúvidas sobre o TaskFlow.
            </SectionDescription>
          </SectionHeader>
          <FAQContainer>
            {faqData.map((item, index) => (
              <FAQItem key={index} $isOpen={openFAQ === index}>
                <FAQQuestion onClick={() => toggleFAQ(index)}>
                  {item.q}
                  <span>{openFAQ === index ? '−' : '+'}</span>
                </FAQQuestion>
                <FAQAnswer $isOpen={openFAQ === index}>
                  {item.a}
                </FAQAnswer>
              </FAQItem>
            ))}
          </FAQContainer>
        </Container>
      </Section>

      {/* 8. CALL TO ACTION FINAL */}
      <CTASection>
        <Container>
          <CTABox>
            <CTATitle>Comece a organizar seu trabalho hoje.</CTATitle>
            <CTASubtitle>
              Crie sua conta gratuitamente e descubra uma nova forma de gerenciar projetos.
            </CTASubtitle>
            <CTAButton href="#signup">
              Começar Agora
            </CTAButton>
          </CTABox>
        </Container>
      </CTASection>

      {/* 9. FOOTER */}
      <FooterWrapper>
        <Container>
          <FooterGrid>
            <FooterBrand>
              <Logo href="#">
                <LogoIcon>T</LogoIcon>
                Task<span>Flow</span>
              </Logo>
              <p>A plataforma definitiva para gerenciamento simples e produtivo de tarefas.</p>
            </FooterBrand>

            <FooterColumn>
              <h4>Produto</h4>
              <ul>
                <li><a href="#recursos">Recursos</a></li>
                <li><a href="#beneficios">Benefícios</a></li>
                <li><a href="#demo">Demonstração</a></li>
              </ul>
            </FooterColumn>

            <FooterColumn>
              <h4>Empresa</h4>
              <ul>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="mailto:contato@taskflow.com">Contato</a></li>
              </ul>
            </FooterColumn>

            <FooterColumn>
              <h4>Redes Sociais</h4>
              <ul>
                <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="mailto:suporte@taskflow.com">Email</a></li>
              </ul>
            </FooterColumn>
          </FooterGrid>

          <FooterBottom>
            <span>© 2026 TaskFlow. Todos os direitos reservados.</span>
            <span>Feito com foco em simplicidade e alta performance.</span>
          </FooterBottom>
        </Container>
      </FooterWrapper>
    </>
  );
}