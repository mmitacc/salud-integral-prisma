import * as z from 'zod';

export const UsuarioScalarFieldEnumSchema = z.enum(['id', 'id_especialidad', 'nombres', 'apellidos', 'telefono', 'masculino', 'fechanacimiento', 'email', 'password', 'role', 'username', 'registerdate', 'deleted'])

export type UsuarioScalarFieldEnum = z.infer<typeof UsuarioScalarFieldEnumSchema>;