import * as z from 'zod';
// prettier-ignore
export const ConsultaModelSchema = z.object({
    id: z.number().int(),
    id_cita: z.number().int(),
    id_medico: z.number().int(),
    fecha: z.date(),
    horario: z.date(),
    costo: z.number(),
    registerdate: z.date(),
    cita: z.unknown(),
    medico: z.unknown()
}).strict();

export type ConsultaPureType = z.infer<typeof ConsultaModelSchema>;
