import * as z from 'zod';
// prettier-ignore
export const EspecialidadInputSchema = z.object({
    id: z.number().int(),
    tipo: z.string(),
    registerdate: z.coerce.date(),
    medicos: z.array(z.unknown())
}).strict();

export type EspecialidadInputType = z.infer<typeof EspecialidadInputSchema>;
