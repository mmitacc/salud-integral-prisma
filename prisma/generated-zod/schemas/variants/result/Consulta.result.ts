import * as z from 'zod';
import { EstadoCitaSchema } from '../../enums/EstadoCita.schema';
// prettier-ignore
export const ConsultaResultSchema = z.object({
    id: z.number().int(),
    id_paciente: z.number().int(),
    id_medico: z.number().int(),
    estado: EstadoCitaSchema,
    citadate: z.date(),
    costo: z.number(),
    registerdate: z.date(),
    deleted: z.boolean(),
    paciente: z.unknown(),
    medico: z.unknown()
}).strict();

export type ConsultaResultType = z.infer<typeof ConsultaResultSchema>;
