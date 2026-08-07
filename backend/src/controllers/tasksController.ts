import { Request, Response } from "express";
import { getTasksService } from "../services/tasksService";

export async function getTasks(
    req: Request, res: Response
) {
  try {
    const result = await getTasksService();
    return res.status(200).json(result);
  } catch (e) {
    return res.status(400).json({
      message: e instanceof Error ? e.message : "Erro ao buscar projetos.",
    });
  }
}

export async function postTasks(
    req: Request, res: Response
) {
  try {
    const result = await getTasksService();
    return res.status(200).json(result);
  } catch (e) {
    return res.status(400).json({
      message: e instanceof Error ? e.message : "Erro ao buscar projetos.",
    });
  }
}

export async function patchTasks(
    req: Request, res: Response
) {
  try {
    const result = await getTasksService();
    return res.status(200).json(result);
  } catch (e) {
    return res.status(400).json({
      message: e instanceof Error ? e.message : "Erro ao buscar projetos.",
    });
  }
}
 
export async function deleteTasks (
    req: Request, res: Response
) {
  try {
    const result = await getTasksService();
    return res.status(200).json(result);
  } catch (e) {
    return res.status(400).json({
      message: e instanceof Error ? e.message : "Erro ao buscar projetos.",
    });
  }
}
 