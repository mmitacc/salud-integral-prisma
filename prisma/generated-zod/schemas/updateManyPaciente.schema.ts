import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { PacienteUpdateManyMutationInputObjectSchema as PacienteUpdateManyMutationInputObjectSchema } from './objects/PacienteUpdateManyMutationInput.schema';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './objects/PacienteWhereInput.schema';

export const PacienteUpdateManySchema: z.ZodType<Prisma.PacienteUpdateManyArgs> = z.object({ data: PacienteUpdateManyMutationInputObjectSchema, where: PacienteWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PacienteUpdateManyArgs>;

export const PacienteUpdateManyZodSchema = z.object({ data: PacienteUpdateManyMutationInputObjectSchema, where: PacienteWhereInputObjectSchema.optional() }).strict();