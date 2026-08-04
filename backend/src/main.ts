import express from "express";
import cors from "cors";
import { authRouter, projectsRouter, tasksRouter } from "./routes";
import fs from "fs/promises";

export const database = "./src/db/db.json";
export async function initializeDb() {
  const result = await fs.readFile(database, "utf-8");
  const db = JSON.parse(result);
  return db
}

const app = express();
app.use(cors());
app.use(express.json())

app.use("/", authRouter);
app.use("/", projectsRouter);
app.use("/", tasksRouter);

export default app;
