import * as z from 'zod';

export const ConsultaScalarFieldEnumSchema = z.enum(['id', 'id_paciente', 'id_medico', 'estado', 'fecha', 'horario', 'costo', 'registerdate', 'deleted'])

export type ConsultaScalarFieldEnum = z.infer<typeof ConsultaScalarFieldEnumSchema>;