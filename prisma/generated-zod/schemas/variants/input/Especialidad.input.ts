import * as z from 'zod';
// prettier-ignore
export const EspecialidadInputSchema = z.object({
    id: z.number().int(),
    tipo: z.string(),
    registerdate: z.coerce.date(),
    deleted: z.boolean(),
    usuarios: z.array(z.unknown())
}).strict();

export type EspecialidadInputType = z.infer<typeof EspecialidadInputSchema>;
