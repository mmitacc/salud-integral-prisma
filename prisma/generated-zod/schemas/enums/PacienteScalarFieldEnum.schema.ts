import * as z from 'zod';

export const PacienteScalarFieldEnumSchema = z.enum(['id', 'nombres', 'apellidos', 'telefono', 'email', 'masculino', 'fecha_nac', 'tipo_sangre', 'alergias'])

export type PacienteScalarFieldEnum = z.infer<typeof PacienteScalarFieldEnumSchema>;