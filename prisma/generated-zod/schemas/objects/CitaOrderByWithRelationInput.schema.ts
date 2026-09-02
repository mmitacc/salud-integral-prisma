import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PacienteOrderByWithRelationInputObjectSchema as PacienteOrderByWithRelationInputObjectSchema } from './PacienteOrderByWithRelationInput.schema';
import { ConsultaOrderByRelationAggregateInputObjectSchema as ConsultaOrderByRelationAggregateInputObjectSchema } from './ConsultaOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_paciente: SortOrderSchema.optional(),
  estado: SortOrderSchema.optional(),
  pagoinicial: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  paciente: z.lazy(() => PacienteOrderByWithRelationInputObjectSchema).optional(),
  consultas: z.lazy(() => ConsultaOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CitaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CitaOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CitaOrderByWithRelationInput>;
export const CitaOrderByWithRelationInputObjectZodSchema = makeSchema();
