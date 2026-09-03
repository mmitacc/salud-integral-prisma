import * as z from 'zod';
import { ConsultaWhereInputObjectSchema as ConsultaWhereInputObjectSchema } from './ConsultaWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaWhereInputObjectSchema).optional()
}).strict();
export const PacienteCountOutputTypeCountConsultasArgsObjectSchema = makeSchema();
export const PacienteCountOutputTypeCountConsultasArgsObjectZodSchema = makeSchema();
