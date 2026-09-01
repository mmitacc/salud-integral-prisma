import * as z from 'zod';
// prettier-ignore
export const EspecialidadModelSchema = z.object({
    id: z.number().int(),
    tipo: z.string(),
    medicos: z.array(z.unknown())
}).strict();

export type EspecialidadPureType = z.infer<typeof EspecialidadModelSchema>;
