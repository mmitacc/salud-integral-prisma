import * as z from 'zod';
import { EstadoCitaSchema } from '../../enums/EstadoCita.schema';
// prettier-ignore
export const ConsultaInputSchema = z.object({
    id: z.number().int(),
    id_paciente: z.number().int(),
    id_medico: z.number().int(),
    estado: EstadoCitaSchema,
    citadate: z.coerce.date(),
    costo: z.number(),
    registerdate: z.coerce.date(),
    deleted: z.boolean(),
    paciente: z.unknown(),
    medico: z.unknown()
}).strict();

export type ConsultaInputType = z.infer<typeof ConsultaInputSchema>;
