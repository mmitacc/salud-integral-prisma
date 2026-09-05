import * as z from 'zod';

export const UsuarioScalarFieldEnumSchema = z.enum(['id', 'email', 'password', 'role', 'username', 'registerdate', 'deleted'])

export type UsuarioScalarFieldEnum = z.infer<typeof UsuarioScalarFieldEnumSchema>;