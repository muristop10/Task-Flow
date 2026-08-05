import { useQuery } from "@tanstack/react-query"
import { Title } from "../../components/Title"
import Loader from "../../components/Loader"
import { ProjectsContainer } from "../projects"
import { getTasks } from "../../services/tasksService"
import TaskCard from "../../components/TaskCard"
import type { iTask } from "../../schemas/tasks"

const Tasks = () => {

  const { data: tasks = [], error, isLoading } = useQuery<iTask[]>({
    queryKey: ['tasks'],
    queryFn: getTasks,
    staleTime: 1000 * 60 * 5
  })

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <p>Erro ao carregar projetos.</p>
  }

  if (tasks) {
    return <>
      <Title>Tarefas</Title>

      <ProjectsContainer>
        {tasks.map((task) => {
          return <TaskCard task={task} key={task.id} />
        })}
      </ProjectsContainer>
    </>
  }

}

export default Tasks
