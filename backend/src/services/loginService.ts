import { generateToken } from "../jwt/jwt";
import { initializeDb } from "../main";
import { iLoginUser } from "../schemas/loginUser.schema";
import { iRegisterUser } from "../schemas/registerUser.schema";
import bcrypt from 'bcrypt'

export async function loginService(userData: iLoginUser) {
    const db = await initializeDb()

    const selectedUser = db.users.find((user:iRegisterUser) => 
        user.email.toLowerCase() === userData.email.toLowerCase())
    if (!selectedUser) {
        throw new Error ('Usuário não encontrado')
    } else {
        const passwordMatch = await bcrypt.compare(
            userData.password,
            selectedUser.password
        )
        if (!passwordMatch) {
            throw new Error('Usuário ou senha inválidos.')
        }

        const token = generateToken(selectedUser.id)
        const { password: _, ...noPasswordUser } = selectedUser;

        return {
            user: noPasswordUser,
            token
        }
    }

}