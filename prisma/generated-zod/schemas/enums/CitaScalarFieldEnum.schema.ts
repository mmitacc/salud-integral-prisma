import * as z from 'zod';

export const CitaScalarFieldEnumSchema = z.enum(['id', 'id_paciente', 'fecha', 'estado'])

export type CitaScalarFieldEnum = z.infer<typeof CitaScalarFieldEnumSchema>;