import { API_URL } from "../constants";
import type { iUser } from "../schemas/user.schema";

export async function getMe(token: string) {
  const res = await fetch(`${API_URL}/me`, {
    method: `GET`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Sessão inválida / token expirado.");
  } else {
    return data;
  }
}

export async function editMe(userData: iUser) {
  const res = await fetch(`${API_URL}/me`, {
    method: `PATCH`,
    headers: {
      'Content-type': 'application/json'
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Não foi possível o editar usuário.");
  } else {
    return data;
  }
}