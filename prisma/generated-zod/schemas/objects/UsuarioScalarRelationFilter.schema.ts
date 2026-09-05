import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => UsuarioWhereInputObjectSchema).optional()
}).strict();
export const UsuarioScalarRelationFilterObjectSchema: z.ZodType<Prisma.UsuarioScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioScalarRelationFilter>;
export const UsuarioScalarRelationFilterObjectZodSchema = makeSchema();
