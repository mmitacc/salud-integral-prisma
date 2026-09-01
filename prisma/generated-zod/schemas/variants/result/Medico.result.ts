import * as z from 'zod';
// prettier-ignore
export const MedicoResultSchema = z.object({
    id: z.number().int(),
    id_especialidad: z.number().int(),
    nombres: z.string(),
    apellidos: z.string(),
    telefono: z.string(),
    email: z.string(),
    masculino: z.boolean(),
    fecha_nac: z.date(),
    especialidad: z.unknown(),
    consultas: z.array(z.unknown())
}).strict();

export type MedicoResultType = z.infer<typeof MedicoResultSchema>;
