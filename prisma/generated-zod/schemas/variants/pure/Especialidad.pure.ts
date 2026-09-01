import * as z from 'zod';
// prettier-ignore
export const EspecialidadModelSchema = z.object({
    id: z.number().int(),
    tipo: z.string(),
    creado: z.date(),
    medicos: z.array(z.unknown())
}).strict();

export type EspecialidadPureType = z.infer<typeof EspecialidadModelSchema>;
