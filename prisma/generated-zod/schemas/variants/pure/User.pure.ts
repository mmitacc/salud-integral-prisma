import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.number().int(),
    email: z.email({ message: "El formato del correo electrónico no es válido" }),
    password: z.string(),
    role: RoleSchema,
    nombres: z.string(),
    apellidos: z.string(),
    telefono: z.string(),
    activo: z.boolean(),
    registerdate: z.date(),
    deleted: z.boolean()
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
