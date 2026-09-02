import * as z from 'zod';

export const CitaScalarFieldEnumSchema = z.enum(['id', 'id_paciente', 'estado', 'pagoinicial', 'registerdate', 'deleted'])

export type CitaScalarFieldEnum = z.infer<typeof CitaScalarFieldEnumSchema>;