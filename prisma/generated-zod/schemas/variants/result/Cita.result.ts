import * as z from 'zod';
import { EstadoCitaSchema } from '../../enums/EstadoCita.schema';
// prettier-ignore
export const CitaResultSchema = z.object({
    id: z.number().int(),
    idPaciente: z.number().int(),
    fecha: z.date(),
    estado: EstadoCitaSchema,
    pagoInicial: z.number(),
    paciente: z.unknown(),
    consultas: z.array(z.unknown())
}).strict();

export type CitaResultType = z.infer<typeof CitaResultSchema>;
