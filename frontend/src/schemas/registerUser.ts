import { z } from 'zod'

export const createRegisterUserSchema = z.object({
    name: z.string()
    .min(3, 'O nome deve ter no mínimo 3 letras.')
    .refine((value) => !/\d/.test(value), {
        message: 'O nome não deve conter números.'
    }),
    email: z.email('Email inválido.'),
    password: z.string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres.'),
    confirmPassword: z.string()
})
.refine((dados) => dados.password === dados.confirmPassword, {
    message: 'As senhas não batem.',
    path: ['confirmPassword']
})

export type iRegisterUser = z.infer<typeof createRegisterUserSchema>