import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const UsuarioOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioOrderByRelationAggregateInput>;
export const UsuarioOrderByRelationAggregateInputObjectZodSchema = makeSchema();
