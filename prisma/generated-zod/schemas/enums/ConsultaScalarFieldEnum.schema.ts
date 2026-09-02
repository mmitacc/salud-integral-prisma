import * as z from 'zod';

export const ConsultaScalarFieldEnumSchema = z.enum(['id', 'id_cita', 'id_medico', 'fecha', 'horario', 'costo', 'registerdate'])

export type ConsultaScalarFieldEnum = z.infer<typeof ConsultaScalarFieldEnumSchema>;