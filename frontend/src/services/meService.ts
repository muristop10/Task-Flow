import { API_URL } from "../constants";

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