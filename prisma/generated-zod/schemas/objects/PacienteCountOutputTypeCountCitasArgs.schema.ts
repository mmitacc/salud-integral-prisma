import * as z from 'zod';
import { CitaWhereInputObjectSchema as CitaWhereInputObjectSchema } from './CitaWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CitaWhereInputObjectSchema).optional()
}).strict();
export const PacienteCountOutputTypeCountCitasArgsObjectSchema = makeSchema();
export const PacienteCountOutputTypeCountCitasArgsObjectZodSchema = makeSchema();
