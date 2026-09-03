import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.number().int(),
    email: z.email({ message: "El formato del correo electrónico no es válido" }),
    password: z.string(),
    role: RoleSchema,
    username: z.string(),
    nombres: z.string(),
    apellidos: z.string(),
    telefono: z.string(),
    activo: z.boolean(),
    registerdate: z.date(),
    deleted: z.boolean()
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
