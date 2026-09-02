import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EspecialidadOrderByWithRelationInputObjectSchema as EspecialidadOrderByWithRelationInputObjectSchema } from './EspecialidadOrderByWithRelationInput.schema';
import { ConsultaOrderByRelationAggregateInputObjectSchema as ConsultaOrderByRelationAggregateInputObjectSchema } from './ConsultaOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_especialidad: SortOrderSchema.optional(),
  nombres: SortOrderSchema.optional(),
  apellidos: SortOrderSchema.optional(),
  telefono: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  masculino: SortOrderSchema.optional(),
  fechanacimiento: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  especialidad: z.lazy(() => EspecialidadOrderByWithRelationInputObjectSchema).optional(),
  consultas: z.lazy(() => ConsultaOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const MedicoOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MedicoOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicoOrderByWithRelationInput>;
export const MedicoOrderByWithRelationInputObjectZodSchema = makeSchema();
