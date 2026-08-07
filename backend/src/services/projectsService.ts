import { initializeDb } from "../main";

export async function getProjectsService() {
  const db = await initializeDb()
  return db.projects
}