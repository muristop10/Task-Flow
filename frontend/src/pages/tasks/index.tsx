import { useQuery } from "@tanstack/react-query"
import { Title } from "../../components/Title"
import Loader from "../../components/Loader"
import { ProjectsContainer } from "../projects"
import { getTasks } from "../../services/tasksService"
import type { iTask } from "../../types/tasks"
import TaskCard from "../../components/TaskCard"

const Tasks = () => {

  const { data: tasks = [], error, isLoading } = useQuery<iTask[]>({
    queryKey: ['tasks'],
    queryFn: getTasks
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
