import { z } from 'zod'

export const createDefaultUserSchema = z.object({
    name: z.string()
    .min(3, 'O nome deve ter no mínimo 3 letras.')
    .refine((value) => !/\d/.test(value), {
        message: 'O nome não deve conter números.'
    }),
    email: z.email('Email inválido.')
})

export type iUser = z.infer<typeof createDefaultUserSchema>