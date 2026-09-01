import * as z from 'zod';
// prettier-ignore
export const PacienteInputSchema = z.object({
    id: z.number().int(),
    nombres: z.string(),
    apellidos: z.string(),
    telefono: z.string(),
    email: z.string(),
    masculino: z.boolean(),
    fecha_nac: z.coerce.date(),
    tipo_sangre: z.string(),
    alergias: z.string(),
    historiales: z.array(z.unknown()),
    citas: z.array(z.unknown())
}).strict();

export type PacienteInputType = z.infer<typeof PacienteInputSchema>;
