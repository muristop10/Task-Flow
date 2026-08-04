import type { iProject } from '../../types/projects'

import styled from "styled-components";

export const ProjectContainer = styled.div`
  background: var(--surface);

  border: 1px solid var(--border);
  border-radius: 20px;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  transition: all 0.3s ease;
  cursor: pointer;

  box-shadow: var(--shadow);

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary);
  }
`;

export const ProjectID = styled.span`
  width: fit-content;

  font-size: 0.75rem;
  font-weight: 600;

  color: var(--primary);
  background: rgba(99, 102, 241, 0.15);

  padding: 0.3rem 0.7rem;
  border-radius: 999px;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;

  color: var(--text-primary);

  line-height: 1.2;
`;

export const ProjectDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;

  color: var(--text-secondary);

  flex: 1;
`;

export const ProjectOwner = styled.span`
  width: fit-content;

  margin-top: auto;

  font-size: 0.85rem;
  font-weight: 600;

  color: var(--text-primary);
  background: var(--background);

  padding: 0.5rem 0.8rem;
  border-radius: 10px;

  border: 1px solid var(--border);
`;

interface ProjectCardProps {
    project: iProject
}

const ProjectCard = ({
    project
}: ProjectCardProps) => {
    return (
        <ProjectContainer>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectID>{project.id}</ProjectID>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectOwner>{project.ownerId}</ProjectOwner>
        </ProjectContainer>
    )
}

export default ProjectCard
