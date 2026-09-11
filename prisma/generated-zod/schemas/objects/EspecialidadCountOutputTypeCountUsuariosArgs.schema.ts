import * as z from 'zod';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioWhereInputObjectSchema).optional()
}).strict();
export const EspecialidadCountOutputTypeCountUsuariosArgsObjectSchema = makeSchema();
export const EspecialidadCountOutputTypeCountUsuariosArgsObjectZodSchema = makeSchema();
