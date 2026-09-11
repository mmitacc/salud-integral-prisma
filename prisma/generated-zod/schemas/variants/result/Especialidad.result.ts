import * as z from 'zod';
// prettier-ignore
export const EspecialidadResultSchema = z.object({
    id: z.number().int(),
    tipo: z.string(),
    registerdate: z.date(),
    deleted: z.boolean(),
    usuarios: z.array(z.unknown())
}).strict();

export type EspecialidadResultType = z.infer<typeof EspecialidadResultSchema>;
