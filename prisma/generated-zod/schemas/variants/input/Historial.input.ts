import * as z from 'zod';
// prettier-ignore
export const HistorialInputSchema = z.object({
    id: z.number().int(),
    id_paciente: z.number().int(),
    fecha: z.coerce.date(),
    motivo: z.string(),
    antecedentes: z.string().optional().nullable(),
    triaje: z.string(),
    diagnostico: z.string().optional().nullable(),
    tratamiento: z.string().optional().nullable(),
    receta: z.string().optional().nullable(),
    paciente: z.unknown()
}).strict();

export type HistorialInputType = z.infer<typeof HistorialInputSchema>;
