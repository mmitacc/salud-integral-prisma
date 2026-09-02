import * as z from 'zod';

export const PacienteScalarFieldEnumSchema = z.enum(['id', 'nombres', 'apellidos', 'telefono', 'email', 'masculino', 'fechanacimiento', 'tiposangre', 'alergias', 'registerdate', 'deleted'])

export type PacienteScalarFieldEnum = z.infer<typeof PacienteScalarFieldEnumSchema>;