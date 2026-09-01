import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { CitaWhereInputObjectSchema as CitaWhereInputObjectSchema } from './CitaWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CitaWhereInputObjectSchema).optional(),
  some: z.lazy(() => CitaWhereInputObjectSchema).optional(),
  none: z.lazy(() => CitaWhereInputObjectSchema).optional()
}).strict();
export const CitaListRelationFilterObjectSchema: z.ZodType<Prisma.CitaListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CitaListRelationFilter>;
export const CitaListRelationFilterObjectZodSchema = makeSchema();
