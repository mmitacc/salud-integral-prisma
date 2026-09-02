import * as z from 'zod';

export const EspecialidadScalarFieldEnumSchema = z.enum(['id', 'tipo', 'registerdate', 'deleted'])

export type EspecialidadScalarFieldEnum = z.infer<typeof EspecialidadScalarFieldEnumSchema>;