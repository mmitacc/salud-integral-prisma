import * as z from 'zod';
// prettier-ignore
export const HistorialResultSchema = z.object({
    id: z.number().int(),
    id_paciente: z.number().int(),
    registerdate: z.date(),
    motivo: z.string(),
    antecedentes: z.string().nullable(),
    triaje: z.string(),
    diagnostico: z.string().nullable(),
    tratamiento: z.string().nullable(),
    receta: z.string().nullable(),
    paciente: z.unknown()
}).strict();

export type HistorialResultType = z.infer<typeof HistorialResultSchema>;
