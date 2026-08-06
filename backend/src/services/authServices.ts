import bcrypt from 'bcrypt'
import fs from 'fs/promises'
import { database, initializeDb } from "../main";
import { generateToken } from "../jwt/jwt";
import { iRegisterUser } from '../schemas/registerUser.schema';
import { randomUUID } from 'crypto';

export async function registerService (userData: iRegisterUser) {
    const db = await initializeDb();
    const passwordHash = await bcrypt.hash(
        userData.password,
        10
    )
    const id = randomUUID()

    const token = generateToken(id)

    const newUser = {
        id: id,
        name: userData.name,
        email: userData.email,
        password: passwordHash
    }
    db.users.push(newUser)

    await fs.writeFile(
        database,
        JSON.stringify(db, null, 2)
    )

    const { password, ...loginUser } = newUser;

    return {
        user: loginUser,
        token
    }
}