import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.number().int(),
    email: z.email({ message: "El formato del correo electrónico no es válido" }),
    password: z.string(),
    role: RoleSchema,
    nombres: z.string(),
    apellidos: z.string(),
    activo: z.boolean(),
    registerdate: z.coerce.date()
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
