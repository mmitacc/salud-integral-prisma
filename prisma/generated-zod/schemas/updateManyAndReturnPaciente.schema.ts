import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { PacienteSelectObjectSchema as PacienteSelectObjectSchema } from './objects/PacienteSelect.schema';
import { PacienteUpdateManyMutationInputObjectSchema as PacienteUpdateManyMutationInputObjectSchema } from './objects/PacienteUpdateManyMutationInput.schema';
import { PacienteWhereInputObjectSchema as PacienteWhereInputObjectSchema } from './objects/PacienteWhereInput.schema';

export const PacienteUpdateManyAndReturnSchema: z.ZodType<Prisma.PacienteUpdateManyAndReturnArgs> = z.object({ select: PacienteSelectObjectSchema.optional(), data: PacienteUpdateManyMutationInputObjectSchema, where: PacienteWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PacienteUpdateManyAndReturnArgs>;

export const PacienteUpdateManyAndReturnZodSchema = z.object({ select: PacienteSelectObjectSchema.optional(), data: PacienteUpdateManyMutationInputObjectSchema, where: PacienteWhereInputObjectSchema.optional() }).strict();