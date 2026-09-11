import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EspecialidadOrderByWithRelationInputObjectSchema as EspecialidadOrderByWithRelationInputObjectSchema } from './EspecialidadOrderByWithRelationInput.schema';
import { ConsultaOrderByRelationAggregateInputObjectSchema as ConsultaOrderByRelationAggregateInputObjectSchema } from './ConsultaOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  id_especialidad: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  nombres: SortOrderSchema.optional(),
  apellidos: SortOrderSchema.optional(),
  telefono: SortOrderSchema.optional(),
  masculino: SortOrderSchema.optional(),
  fechanacimiento: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  especialidad: z.lazy(() => EspecialidadOrderByWithRelationInputObjectSchema).optional(),
  consultas: z.lazy(() => ConsultaOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UsuarioOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UsuarioOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioOrderByWithRelationInput>;
export const UsuarioOrderByWithRelationInputObjectZodSchema = makeSchema();
