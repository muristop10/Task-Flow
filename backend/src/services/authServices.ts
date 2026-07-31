import { RegisterUser } from "../types/registerUser";
import bcrypt from 'bcrypt'
import fs from 'fs/promises'
import { database, initializeDb } from "../main";

export async function registerService (userData: RegisterUser) {
    const db = await initializeDb();
    const passwordHash = await bcrypt.hash(
        userData.password,
        10
    )

    const newUser = {
        id: crypto.randomUUID(),
        name: userData.name,
        email: userData.email,
        password: passwordHash
    }
    db.users.push(newUser)

    await fs.writeFile(
        database,
        JSON.stringify(db, null, 2)
    )

    return newUser
}