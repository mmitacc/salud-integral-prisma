import * as z from 'zod';

export const PacienteScalarFieldEnumSchema = z.enum(['id', 'nombres', 'apellidos', 'telefono', 'email', 'masculino', 'fecha_nac', 'tipoSangre', 'alergias', 'creado'])

export type PacienteScalarFieldEnum = z.infer<typeof PacienteScalarFieldEnumSchema>;