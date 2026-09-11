import * as z from 'zod';

export const ConsultaScalarFieldEnumSchema = z.enum(['id', 'id_paciente', 'id_usuario', 'estado', 'citadate', 'costo', 'registerdate', 'deleted'])

export type ConsultaScalarFieldEnum = z.infer<typeof ConsultaScalarFieldEnumSchema>;