import * as z from 'zod';
// prettier-ignore
export const HistorialModelSchema = z.object({
    id: z.number().int(),
    idPaciente: z.number().int(),
    fecha: z.date(),
    motivo: z.string(),
    antecedentes: z.string().nullable(),
    triaje: z.string(),
    diagnostico: z.string().nullable(),
    tratamiento: z.string().nullable(),
    receta: z.string().nullable(),
    paciente: z.unknown()
}).strict();

export type HistorialPureType = z.infer<typeof HistorialModelSchema>;
