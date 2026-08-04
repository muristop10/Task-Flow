import { Request, Response } from "express";
import { getTasksService } from "../services/tasksService";

export async function tasks(
    req: Request, res: Response
) {
  try {
    const result = await getTasksService();
    return res.status(201).json(result);
  } catch (e) {
    return res.status(400).json({
      message: e instanceof Error ? e.message : "Erro ao buscar projetos.",
    });
  }
}
