import { useQuery } from "@tanstack/react-query"
import { Title } from "../../components/Title"
import Loader from "../../components/Loader"
import { CardsContainer } from "../projects"
import { getTasks } from "../../services/tasksService"
import TaskCard from "../../components/TaskCard"
import type { iTask } from "../../schemas/tasks.schema"
import ErrorQuery from "../../components/ErrorQuery"

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
    return <ErrorQuery />
  }

  if (tasks) {
    return <>
      <Title>Tarefas</Title>

      <CardsContainer>
        {tasks.map((task) => {
          return <TaskCard task={task} key={task.id} />
        })}
      </CardsContainer>
    </>
  }

}

export default Tasks
