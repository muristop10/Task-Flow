import { initializeDb } from "../main";

export async function getTasksService() {
  const db = await initializeDb()

  const {tasks} = JSON.parse(db);

  return tasks;
}