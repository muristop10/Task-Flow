import { Request, Response } from "express";
import { registerService } from "../services/authServices";

export async function register(req: Request, res: Response) {
  try {
    const result = await registerService(req.body);
    return res.status(201).json(result);
  } catch (e) {
    return res.status(400).json({
      message: e instanceof Error ? e.message : "Erro ao cadastrar usuário.",
    });
  }
}
