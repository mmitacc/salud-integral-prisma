import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MedicoOrderByRelationAggregateInputObjectSchema as MedicoOrderByRelationAggregateInputObjectSchema } from './MedicoOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tipo: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  medicos: z.lazy(() => MedicoOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const EspecialidadOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EspecialidadOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadOrderByWithRelationInput>;
export const EspecialidadOrderByWithRelationInputObjectZodSchema = makeSchema();
