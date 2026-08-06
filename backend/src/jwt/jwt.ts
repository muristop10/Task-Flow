import jwt, { SignOptions } from "jsonwebtoken";

export function generateToken(id: string) {
  const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_EXPIRES_IN || !JWT_SECRET) {
    throw new Error("VARIÁVEIS .ENV NÃO DEFINIDAS!");
  } else {
    return jwt.sign({id}, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN as SignOptions["expiresIn"],
    });
  }
}
