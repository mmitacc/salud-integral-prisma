import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const UsuarioAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioAvgOrderByAggregateInput>;
export const UsuarioAvgOrderByAggregateInputObjectZodSchema = makeSchema();
