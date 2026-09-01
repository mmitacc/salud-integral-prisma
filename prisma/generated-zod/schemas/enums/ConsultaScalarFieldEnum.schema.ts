import * as z from 'zod';

export const ConsultaScalarFieldEnumSchema = z.enum(['id', 'idCita', 'idMedico', 'fecha', 'horario', 'costo', 'creado'])

export type ConsultaScalarFieldEnum = z.infer<typeof ConsultaScalarFieldEnumSchema>;