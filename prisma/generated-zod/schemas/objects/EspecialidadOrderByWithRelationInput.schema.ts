import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UsuarioOrderByRelationAggregateInputObjectSchema as UsuarioOrderByRelationAggregateInputObjectSchema } from './UsuarioOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tipo: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  usuarios: z.lazy(() => UsuarioOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const EspecialidadOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EspecialidadOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EspecialidadOrderByWithRelationInput>;
export const EspecialidadOrderByWithRelationInputObjectZodSchema = makeSchema();
