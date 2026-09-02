import * as z from 'zod';
// prettier-ignore
export const PacienteModelSchema = z.object({
    id: z.number().int(),
    nombres: z.string(),
    apellidos: z.string(),
    telefono: z.string(),
    email: z.email({ message: "El formato del correo electrónico no es válido" }),
    masculino: z.boolean(),
    fechanacimiento: z.date(),
    tiposangre: z.string(),
    alergias: z.string(),
    registerdate: z.date(),
    historiales: z.array(z.unknown()),
    citas: z.array(z.unknown())
}).strict();

export type PacientePureType = z.infer<typeof PacienteModelSchema>;
