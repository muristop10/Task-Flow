import { API_URL } from "../constants";

export async function getTasks() {
  const res = await fetch(`${API_URL}/tasks`, {
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Erro ao receber tarefas.");
  } else {
    return res.json();
  }
}
