import { useQuery } from "@tanstack/react-query"
import { Title } from "../../components/Title"
import { getProjects } from "../../services/projectsService";
import Loader from "../../components/Loader";
import ProjectCard from "../../components/ProjectCard";
import styled from "styled-components";
import type { iProject } from "../../schemas/projects.schema";
import ErrorQuery from "../../components/ErrorQuery";

export const CardsContainer = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 2rem auto;
`;

const Projects = () => {

  const { data: projects = [], isLoading, error } = useQuery<iProject[]>({
    queryKey: ['projects'],
    queryFn: getProjects
  })

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <ErrorQuery />
  }

  return (
    <div>
      <Title>Projetos</Title>
      <CardsContainer>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />
        })}
      </CardsContainer>
    </div>
  )
}


export default Projects
