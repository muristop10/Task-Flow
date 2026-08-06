import { API_URL } from "../constants";
import type { iLoginUser } from "../schemas/loginUser.schema";
import type { iRegisterUser } from "../schemas/registerUser.schema";

export async function registerUser(userData: iRegisterUser) {
  const result = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await result.json();

  if (!result.ok) {
    throw new Error(data.message || "Erro ao criar usuário.");
  }
  return data;
}

export async function loginUser(userData: iLoginUser) {
  const result = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await result.json();
  if (!result.ok) {
    throw new Error(data.message || "Erro ao fazer login.");
  }
  return data;
}

export async function getMe(token: string) {
  const res = await fetch(`${API_URL}/me`, {
    method: `GET`,
    headers: {
      "Content-type:": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = res.json();
  if (!res.ok) {
    throw new Error("Sessão inválida / token expirado.");
  } else {
    return data;
  }
}
