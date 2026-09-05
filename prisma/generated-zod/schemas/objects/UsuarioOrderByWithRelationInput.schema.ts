import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MedicoOrderByWithRelationInputObjectSchema as MedicoOrderByWithRelationInputObjectSchema } from './MedicoOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  registerdate: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  medico: z.lazy(() => MedicoOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const UsuarioOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UsuarioOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioOrderByWithRelationInput>;
export const UsuarioOrderByWithRelationInputObjectZodSchema = makeSchema();
