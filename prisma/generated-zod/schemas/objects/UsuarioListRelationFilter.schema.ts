import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
  some: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
  none: z.lazy(() => UsuarioWhereInputObjectSchema).optional()
}).strict();
export const UsuarioListRelationFilterObjectSchema: z.ZodType<Prisma.UsuarioListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioListRelationFilter>;
export const UsuarioListRelationFilterObjectZodSchema = makeSchema();
