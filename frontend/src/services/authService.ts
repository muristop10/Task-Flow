import { API_URL } from "../constants";
import type { RegisterUser } from "../types/registerUser";

export async function registerUser(
    userData: RegisterUser
) {
    const result = await fetch(
        `${API_URL}/register`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }
    )
    const data = await result.json();

    if (!result.ok) {
        throw new Error(
            data.message || "Erro ao criar usuário."
        );
    }
    return data;
}