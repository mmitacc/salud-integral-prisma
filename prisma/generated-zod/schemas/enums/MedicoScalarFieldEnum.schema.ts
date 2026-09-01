import * as z from 'zod';

export const MedicoScalarFieldEnumSchema = z.enum(['id', 'idEspecialidad', 'nombres', 'apellidos', 'telefono', 'email', 'masculino', 'fechaNac', 'creado'])

export type MedicoScalarFieldEnum = z.infer<typeof MedicoScalarFieldEnumSchema>;