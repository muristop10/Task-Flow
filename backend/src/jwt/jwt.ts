import jwt, { SignOptions } from "jsonwebtoken";

const EXPIRES_IN = process.env.EXPIRES_IN;
const JWT_SECRET = process.env.JWT_SECRET;



export function generateToken(id: string) {
  if (!EXPIRES_IN || !JWT_SECRET) {
    throw new Error("VARIÁVEIS .ENV NÃO DEFINIDAS!");
  } else {
    return jwt.sign(id, JWT_SECRET, {
      expiresIn: EXPIRES_IN as SignOptions['expiresIn'],
    });
  }
}
