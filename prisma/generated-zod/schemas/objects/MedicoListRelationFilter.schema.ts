import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { MedicoWhereInputObjectSchema as MedicoWhereInputObjectSchema } from './MedicoWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MedicoWhereInputObjectSchema).optional(),
  some: z.lazy(() => MedicoWhereInputObjectSchema).optional(),
  none: z.lazy(() => MedicoWhereInputObjectSchema).optional()
}).strict();
export const MedicoListRelationFilterObjectSchema: z.ZodType<Prisma.MedicoListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MedicoListRelationFilter>;
export const MedicoListRelationFilterObjectZodSchema = makeSchema();
