import fs from "fs/promises";
import { database } from "../main";

export async function getProjectsService() {
  const data = await fs.readFile(
    database,
    "utf-8"
  );

  const {projects} = JSON.parse(data);

  return projects;
}