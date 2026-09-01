import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { HistorialWhereInputObjectSchema as HistorialWhereInputObjectSchema } from './HistorialWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => HistorialWhereInputObjectSchema).optional(),
  some: z.lazy(() => HistorialWhereInputObjectSchema).optional(),
  none: z.lazy(() => HistorialWhereInputObjectSchema).optional()
}).strict();
export const HistorialListRelationFilterObjectSchema: z.ZodType<Prisma.HistorialListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.HistorialListRelationFilter>;
export const HistorialListRelationFilterObjectZodSchema = makeSchema();
