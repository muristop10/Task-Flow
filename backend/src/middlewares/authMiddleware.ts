import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// 1. Criamos uma interface para o Payload contido dentro do Token
interface TokenPayload {
  id: string;
  email: string;
  iat: number;
  exp: number;
}

// 2. Extendemos a interface do Request do Express para o TS reconhecer req.user
export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
  };
}

export function ensureAuthenticated(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    throw new Error("VARIAVEL .ENV NÃO DEFINIDA!");
  }

  // Checa se o cabeçalho veio na requisição
  if (!authHeader) {
    return res.status(401).json({
      message: 'Token de autenticação não fornecido.',
    });
  }

  // O formato deve ser "Bearer <token>"
  const parts = authHeader.split(' ');

  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({
      message: 'Formato do token inválido. Use o padrão Bearer.',
    });
  }

  const token = parts[1];

  try {
    // Decodifica e valida a assinatura do token
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;

    // Anexa as informações do usuário na requisição
    req.user = {
      id: decoded.id,
      email: decoded.email,
    };

    // Permite que a requisição siga para a controller/rota
    return next();
  } catch {
    return res.status(401).json({
      message: 'Token inválido ou expirado.',
    });
  }
}