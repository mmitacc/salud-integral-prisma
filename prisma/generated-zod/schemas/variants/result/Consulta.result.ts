import * as z from 'zod';
// prettier-ignore
export const ConsultaResultSchema = z.object({
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

export type ConsultaResultType = z.infer<typeof ConsultaResultSchema>;
