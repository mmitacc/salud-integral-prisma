import * as z from 'zod';
import { EstadoCitaSchema } from '../../enums/EstadoCita.schema';
// prettier-ignore
export const ConsultaModelSchema = z.object({
    id: z.number().int(),
    id_paciente: z.number().int(),
    id_usuario: z.number().int(),
    estado: EstadoCitaSchema,
    citadate: z.date(),
    costo: z.number(),
    registerdate: z.date(),
    deleted: z.boolean(),
    paciente: z.unknown(),
    usuario: z.unknown()
}).strict();

export type ConsultaPureType = z.infer<typeof ConsultaModelSchema>;
