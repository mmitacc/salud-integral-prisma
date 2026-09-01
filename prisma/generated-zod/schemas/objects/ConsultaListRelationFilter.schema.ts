import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { ConsultaWhereInputObjectSchema as ConsultaWhereInputObjectSchema } from './ConsultaWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ConsultaWhereInputObjectSchema).optional(),
  some: z.lazy(() => ConsultaWhereInputObjectSchema).optional(),
  none: z.lazy(() => ConsultaWhereInputObjectSchema).optional()
}).strict();
export const ConsultaListRelationFilterObjectSchema: z.ZodType<Prisma.ConsultaListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaListRelationFilter>;
export const ConsultaListRelationFilterObjectZodSchema = makeSchema();
