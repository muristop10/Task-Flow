import { z } from 'zod'

export const createBackUserSchema = z.object({
    id: z.string(),
        name: z.string()
    .min(3, 'O nome deve ter no mínimo 3 letras.')
    .refine((value) => !/\d/.test(value), {
        message: 'O nome não deve conter números.'
    }),
    email: z.email('Email inválido.'),
    password: z.string()
})

export type iUser = z.infer<typeof createBackUserSchema>