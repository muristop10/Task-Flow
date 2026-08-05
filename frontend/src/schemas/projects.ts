import { z } from 'zod'

export const createProjectSchema = z.object({
    id: z.string(),
    name: z.string().min(5, 'O nome deve ter no mínimo 5 letras.'),
    description: z.string().min(10, 'A descrição deve ter no mínimo 10 letras.'),
    ownerId: z.string()
})

export type iProject = z.infer<typeof createProjectSchema>