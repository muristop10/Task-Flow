import { API_URL } from "../constants";

export async function getTasks() {
  const token = localStorage.getItem('token')
  const res = await fetch(`${API_URL}/tasks`, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json()
  if (!res.ok) {
  throw new Error ( data.message || "Erro ao receber tarefas.");
  } else {
    return data;
  }
}
