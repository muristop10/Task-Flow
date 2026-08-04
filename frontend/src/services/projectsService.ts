import { API_URL } from "../constants";

export async function getProjects() {
  const res = await fetch(`${API_URL}/projects`, {
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Erro ao receber projetos.");
  } else {
    return res.json();
  }
}
