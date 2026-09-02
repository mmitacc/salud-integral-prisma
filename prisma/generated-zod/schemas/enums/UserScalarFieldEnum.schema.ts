import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'email', 'password', 'role', 'nombres', 'apellidos', 'activo', 'registerdate'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;