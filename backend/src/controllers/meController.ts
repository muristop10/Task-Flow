import { Response } from 'express';
import { AuthenticatedRequest } from '../middlewares/authMiddleware';
import { initializeDb } from '../main';
import { iUser } from '../schemas/user.schema';

export async function me(
  req: AuthenticatedRequest,
  res: Response
) {
  const db = await initializeDb();

  const user = db.users.find(
    (user: iUser) => user.id === req.user?.id
  );

  if (!user) {
    return res.status(404).json({
      message: 'Usuário não encontrado'
    });
  }

  const { password: _, ...userWithoutPassword } = user;


  return res.json(userWithoutPassword);
}