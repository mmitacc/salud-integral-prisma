import * as z from 'zod';
// prettier-ignore
export const MedicoInputSchema = z.object({
    id: z.number().int(),
    id_especialidad: z.number().int(),
    nombres: z.string(),
    apellidos: z.string(),
    telefono: z.string(),
    email: z.email({ message: "El formato del correo electrónico no es válido" }),
    masculino: z.boolean(),
    fechanacimiento: z.coerce.date(),
    registerdate: z.coerce.date(),
    deleted: z.boolean(),
    especialidad: z.unknown(),
    consultas: z.array(z.unknown())
}).strict();

export type MedicoInputType = z.infer<typeof MedicoInputSchema>;
