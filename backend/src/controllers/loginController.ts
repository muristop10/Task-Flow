import { Request, Response } from "express";
import { loginService } from "../services/loginService";

export async function login(req: Request, res: Response) {
  try {
    const result = await loginService(req.body);
    return res.status(201).json(result);
  } catch (e) {
    return res.status(400).json({
      message: e instanceof Error ? e.message : "Erro ao logar usuário.",
    });
  }
}
