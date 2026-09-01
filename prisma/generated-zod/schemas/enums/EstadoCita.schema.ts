import * as z from 'zod';

export const EstadoCitaSchema = z.enum(['PROGRAMADA', 'COMPLETADA', 'CANCELADA'])

export type EstadoCita = z.infer<typeof EstadoCitaSchema>;