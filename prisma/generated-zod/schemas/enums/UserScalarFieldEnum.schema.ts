import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'email', 'password', 'role', 'username', 'nombres', 'apellidos', 'telefono', 'activo', 'registerdate', 'deleted'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;