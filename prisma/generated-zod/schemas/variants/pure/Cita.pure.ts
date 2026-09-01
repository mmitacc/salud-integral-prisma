import * as z from 'zod';
import { EstadoCitaSchema } from '../../enums/EstadoCita.schema';
// prettier-ignore
export const CitaModelSchema = z.object({
    id: z.number().int(),
    id_paciente: z.number().int(),
    fecha: z.date(),
    estado: EstadoCitaSchema,
    paciente: z.unknown(),
    consultas: z.array(z.unknown())
}).strict();

export type CitaPureType = z.infer<typeof CitaModelSchema>;
