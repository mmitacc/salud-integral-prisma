import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const medicoscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MedicoScalarWhereInputObjectSchema), z.lazy(() => MedicoScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MedicoScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MedicoScalarWhereInputObjectSchema), z.lazy(() => MedicoScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  id_especialidad: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombres: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  apellidos: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  telefono: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  masculino: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  fechanacimiento: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  registerdate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const MedicoScalarWhereInputObjectSchema: z.ZodType<Prisma.MedicoScalarWhereInput> = medicoscalarwhereinputSchema as unknown as z.ZodType<Prisma.MedicoScalarWhereInput>;
export const MedicoScalarWhereInputObjectZodSchema = medicoscalarwhereinputSchema;
