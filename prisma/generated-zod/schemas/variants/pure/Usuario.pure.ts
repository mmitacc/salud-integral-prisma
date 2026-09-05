import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UsuarioModelSchema = z.object({
    id: z.number().int(),
    email: z.email({ message: "El formato del correo electrónico no es válido" }),
    password: z.string(),
    role: RoleSchema,
    username: z.string(),
    registerdate: z.date(),
    deleted: z.boolean(),
    medico: z.unknown().nullable()
}).strict();

export type UsuarioPureType = z.infer<typeof UsuarioModelSchema>;
