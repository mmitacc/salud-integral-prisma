import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UsuarioInputSchema = z.object({
    id: z.number().int(),
    id_especialidad: z.number().int().optional().nullable(),
    nombres: z.string(),
    apellidos: z.string(),
    telefono: z.string(),
    masculino: z.boolean(),
    fechanacimiento: z.coerce.date(),
    email: z.email({ message: "El formato del correo electrónico no es válido" }),
    password: z.string(),
    role: RoleSchema,
    username: z.string(),
    registerdate: z.coerce.date(),
    deleted: z.boolean(),
    especialidad: z.unknown().optional().nullable(),
    consultas: z.array(z.unknown())
}).strict();

export type UsuarioInputType = z.infer<typeof UsuarioInputSchema>;
