import * as z from 'zod';

export const HistorialScalarFieldEnumSchema = z.enum(['id', 'id_paciente', 'motivo', 'antecedentes', 'triaje', 'diagnostico', 'tratamiento', 'receta', 'registerdate', 'deleted'])

export type HistorialScalarFieldEnum = z.infer<typeof HistorialScalarFieldEnumSchema>;