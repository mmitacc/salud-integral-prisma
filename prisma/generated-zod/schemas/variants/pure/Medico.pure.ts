import * as z from 'zod';
// prettier-ignore
export const MedicoModelSchema = z.object({
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

export type MedicoPureType = z.infer<typeof MedicoModelSchema>;
