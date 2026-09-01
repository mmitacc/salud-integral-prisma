import * as z from 'zod';

export const EspecialidadScalarFieldEnumSchema = z.enum(['id', 'tipo'])

export type EspecialidadScalarFieldEnum = z.infer<typeof EspecialidadScalarFieldEnumSchema>;