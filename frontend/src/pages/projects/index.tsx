import { useQuery } from "@tanstack/react-query"
import { Title } from "../../components/Title"
import type { iProject } from "../../types/projects";
import { getProjects } from "../../services/projectsService";
import Loader from "../../components/Loader";
import ProjectCard from "../../components/ProjectCard";
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 2rem auto;
`;

const Projects = () => {

  const { data: projects = [], isLoading } = useQuery<iProject[]>({
    queryKey: ['projects'],
    queryFn: getProjects
  })

  if (isLoading) return < Loader />

  return (
    <div>
      <Title>Projetos</Title>
      <ProjectsContainer>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />
        })}
      </ProjectsContainer>
    </div>
  )
}
 

export default Projects
