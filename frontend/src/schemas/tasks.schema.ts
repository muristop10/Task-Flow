import { z } from 'zod'

export const createTaskSchema = z.object({
    id: z.string(),
    title: z.string().min(5, 'O título deve ter no mínimo 5 caracteres.'),
    description: z.string(),
    status: z.enum(['done', 'in-progress', 'todo']),
    projectId: z.string()
})

export type iTask = z.infer<typeof createTaskSchema>