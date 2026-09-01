import * as z from 'zod';
import { EstadoCitaSchema } from '../../enums/EstadoCita.schema';
// prettier-ignore
export const CitaInputSchema = z.object({
    id: z.number().int(),
    idPaciente: z.number().int(),
    fecha: z.coerce.date(),
    estado: EstadoCitaSchema,
    pagoInicial: z.number(),
    paciente: z.unknown(),
    consultas: z.array(z.unknown())
}).strict();

export type CitaInputType = z.infer<typeof CitaInputSchema>;
