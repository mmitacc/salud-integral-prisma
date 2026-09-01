import * as z from 'zod';

export const CitaScalarFieldEnumSchema = z.enum(['id', 'idPaciente', 'fecha', 'estado', 'pagoInicial'])

export type CitaScalarFieldEnum = z.infer<typeof CitaScalarFieldEnumSchema>;