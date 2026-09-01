import * as z from 'zod';

export const MedicoScalarFieldEnumSchema = z.enum(['id', 'id_especialidad', 'nombres', 'apellidos', 'telefono', 'email', 'masculino', 'fecha_nac'])

export type MedicoScalarFieldEnum = z.infer<typeof MedicoScalarFieldEnumSchema>;