import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './objects/PacienteWhereInput.schema';

export const PacienteDeleteManySchema: z.ZodType<Prisma.PacienteDeleteManyArgs> = z.object({ where: PacienteWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PacienteDeleteManyArgs>;

export const PacienteDeleteManyZodSchema = z.object({ where: PacienteWhereInputObjectSchema.optional() }).strict();