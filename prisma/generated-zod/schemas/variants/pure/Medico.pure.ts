import * as z from 'zod';
// prettier-ignore
export const MedicoModelSchema = z.object({
    id: z.number().int(),
    id_especialidad: z.number().int(),
    nombres: z.string(),
    apellidos: z.string(),
    telefono: z.string(),
    email: z.email({ message: "El formato del correo electrónico no es válido" }),
    masculino: z.boolean(),
    fechanacimiento: z.date(),
    registerdate: z.date(),
    deleted: z.boolean(),
    especialidad: z.unknown(),
    consultas: z.array(z.unknown())
}).strict();

export type MedicoPureType = z.infer<typeof MedicoModelSchema>;
