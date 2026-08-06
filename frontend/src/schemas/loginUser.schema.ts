import { z } from 'zod'

export const createUserLoginSchema = z.object({
    email: z.email('Email inválido.'),
    password: z.string()
})

export type iLoginUser = z.infer<typeof createUserLoginSchema>