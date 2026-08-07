import { initializeDb } from "../main";

export async function getTasksService() {
  const db = await initializeDb()
  return db.tasks
}