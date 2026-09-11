import * as z from 'zod';
import { ConsultaWhereInputObjectSchema as ConsultaWhereInputObjectSchema } from './ConsultaWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConsultaWhereInputObjectSchema).optional()
}).strict();
export const UsuarioCountOutputTypeCountConsultasArgsObjectSchema = makeSchema();
export const UsuarioCountOutputTypeCountConsultasArgsObjectZodSchema = makeSchema();
