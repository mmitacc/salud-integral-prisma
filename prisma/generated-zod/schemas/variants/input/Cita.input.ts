import * as z from 'zod';
import { EstadoCitaSchema } from '../../enums/EstadoCita.schema';
// prettier-ignore
export const CitaInputSchema = z.object({
    id: z.number().int(),
    id_paciente: z.number().int(),
    fecha: z.coerce.date(),
    estado: EstadoCitaSchema,
    paciente: z.unknown(),
    consultas: z.array(z.unknown())
}).strict();

export type CitaInputType = z.infer<typeof CitaInputSchema>;
