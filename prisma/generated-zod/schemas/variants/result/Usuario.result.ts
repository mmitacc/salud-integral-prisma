import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UsuarioResultSchema = z.object({
    id: z.number().int(),
    email: z.email({ message: "El formato del correo electrónico no es válido" }),
    password: z.string(),
    role: RoleSchema,
    username: z.string(),
    registerdate: z.date(),
    deleted: z.boolean(),
    medico: z.unknown().nullable()
}).strict();

export type UsuarioResultType = z.infer<typeof UsuarioResultSchema>;
