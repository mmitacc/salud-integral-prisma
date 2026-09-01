import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.number().int(),
    email: z.string(),
    password: z.string(),
    role: RoleSchema,
    nombres: z.string(),
    apellidos: z.string(),
    activo: z.boolean()
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
