import * as z from 'zod';
import { HistorialWhereInputObjectSchema as HistorialWhereInputObjectSchema } from './HistorialWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HistorialWhereInputObjectSchema).optional()
}).strict();
export const PacienteCountOutputTypeCountHistorialesArgsObjectSchema = makeSchema();
export const PacienteCountOutputTypeCountHistorialesArgsObjectZodSchema = makeSchema();
