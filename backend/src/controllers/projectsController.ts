import { Request, Response } from "express";
import { getProjectsService } from "../services/projectsService";

export async function projects(
    req: Request, res: Response
) {
  try {
    const result = await getProjectsService();
    return res.status(201).json(result);
  } catch (e) {
    return res.status(400).json({
      message: e instanceof Error ? e.message : "Erro ao buscar projetos.",
    });
  }
}
