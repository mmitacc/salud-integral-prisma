import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PacienteOrderByWithRelationInputObjectSchema as PacienteOrderByWithRelationInputObjectSchema } from './PacienteOrderByWithRelationInput.schema';
import { MedicoOrderByWithRelationInputObjectSchema as MedicoOrderByWithRelationInputObjectSchema } from './MedicoOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_paciente: SortOrderSchema.optional(),
  id_medico: SortOrderSchema.optional(),
  estado: SortOrderSchema.optional(),
  citadate: SortOrderSchema.optional(),
  costo: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  paciente: z.lazy(() => PacienteOrderByWithRelationInputObjectSchema).optional(),
  medico: z.lazy(() => MedicoOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ConsultaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ConsultaOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ConsultaOrderByWithRelationInput>;
export const ConsultaOrderByWithRelationInputObjectZodSchema = makeSchema();
