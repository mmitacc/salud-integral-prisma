import * as z from 'zod';
// prettier-ignore
export const HistorialResultSchema = z.object({
    id: z.number().int(),
    id_paciente: z.number().int(),
    motivo: z.string(),
    antecedentes: z.string().nullable(),
    triaje: z.string(),
    diagnostico: z.string().nullable(),
    tratamiento: z.string().nullable(),
    receta: z.string().nullable(),
    registerdate: z.date(),
    deleted: z.boolean(),
    paciente: z.unknown()
}).strict();

export type HistorialResultType = z.infer<typeof HistorialResultSchema>;
