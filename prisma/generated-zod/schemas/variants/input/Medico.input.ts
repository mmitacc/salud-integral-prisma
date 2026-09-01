import * as z from 'zod';
// prettier-ignore
export const MedicoInputSchema = z.object({
    id: z.number().int(),
    idEspecialidad: z.number().int(),
    nombres: z.string(),
    apellidos: z.string(),
    telefono: z.string(),
    email: z.string(),
    masculino: z.boolean(),
    fechaNac: z.coerce.date(),
    creado: z.coerce.date(),
    especialidad: z.unknown(),
    consultas: z.array(z.unknown())
}).strict();

export type MedicoInputType = z.infer<typeof MedicoInputSchema>;
