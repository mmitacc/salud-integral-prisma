import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UsuarioInputSchema = z.object({
    id: z.number().int(),
    email: z.email({ message: "El formato del correo electrónico no es válido" }),
    password: z.string(),
    role: RoleSchema,
    username: z.string(),
    registerdate: z.coerce.date(),
    deleted: z.boolean(),
    medico: z.unknown().optional().nullable()
}).strict();

export type UsuarioInputType = z.infer<typeof UsuarioInputSchema>;
