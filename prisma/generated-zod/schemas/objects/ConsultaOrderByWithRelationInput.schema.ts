import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CitaOrderByWithRelationInputObjectSchema as CitaOrderByWithRelationInputObjectSchema } from './CitaOrderByWithRelationInput.schema';
import { MedicoOrderByWithRelationInputObjectSchema as MedicoOrderByWithRelationInputObjectSchema } from './MedicoOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_cita: SortOrderSchema.optional(),
  id_medico: SortOrderSchema.optional(),
  fecha: SortOrderSchema.optional(),
  horario: SortOrderSchema.optional(),
  costo: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  cita: z.lazy(() => CitaOrderByWithRelationInputObjectSchema).optional(),
  medico: z.lazy(() => MedicoOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ConsultaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ConsultaOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaOrderByWithRelationInput>;
export const ConsultaOrderByWithRelationInputObjectZodSchema = makeSchema();
