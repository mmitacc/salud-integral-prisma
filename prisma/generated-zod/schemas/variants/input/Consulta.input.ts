import * as z from 'zod';
// prettier-ignore
export const ConsultaInputSchema = z.object({
    id: z.number().int(),
    idCita: z.number().int(),
    idMedico: z.number().int(),
    fecha: z.coerce.date(),
    horario: z.coerce.date(),
    costo: z.number(),
    creado: z.coerce.date(),
    cita: z.unknown(),
    medico: z.unknown()
}).strict();

export type ConsultaInputType = z.infer<typeof ConsultaInputSchema>;
