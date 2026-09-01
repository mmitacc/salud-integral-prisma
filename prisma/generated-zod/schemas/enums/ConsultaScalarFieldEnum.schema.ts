import * as z from 'zod';

export const ConsultaScalarFieldEnumSchema = z.enum(['id', 'id_cita', 'id_medico', 'fecha', 'horario'])

export type ConsultaScalarFieldEnum = z.infer<typeof ConsultaScalarFieldEnumSchema>;