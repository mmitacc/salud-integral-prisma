import * as z from 'zod';

export const HistorialScalarFieldEnumSchema = z.enum(['id', 'id_paciente', 'registerdate', 'motivo', 'antecedentes', 'triaje', 'diagnostico', 'tratamiento', 'receta'])

export type HistorialScalarFieldEnum = z.infer<typeof HistorialScalarFieldEnumSchema>;