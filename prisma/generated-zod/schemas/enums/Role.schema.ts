import * as z from 'zod';

export const RoleSchema = z.enum(['RECEPCIONISTA', 'MEDICO', 'GERENCIA'])

export type Role = z.infer<typeof RoleSchema>;