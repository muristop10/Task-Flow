import fs from "fs/promises";
import { database } from "../main";

export async function getTasksService() {
  const data = await fs.readFile(
    database,
    "utf-8"
  );

  const {tasks} = JSON.parse(data);

  return tasks;
}