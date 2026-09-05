import * as z from 'zod';

export const RoleSchema = z.enum(['RECEPCIONISTA', 'MEDICO', 'GERENCIA', 'ADMIN'])

export type Role = z.infer<typeof RoleSchema>;