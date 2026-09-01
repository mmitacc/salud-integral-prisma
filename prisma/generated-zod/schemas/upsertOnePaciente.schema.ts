import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { PacienteSelectObjectSchema as PacienteSelectObjectSchema } from './objects/PacienteSelect.schema';
import { PacienteIncludeObjectSchema as PacienteIncludeObjectSchema } from './objects/PacienteInclude.schema';
import { PacienteWhereUniqueInputObjectSchema as PacienteWhereUniqueInputObjectSchema } from './objects/PacienteWhereUniqueInput.schema';
import { PacienteCreateInputObjectSchema as PacienteCreateInputObjectSchema } from './objects/PacienteCreateInput.schema';
import { PacienteUncheckedCreateInputObjectSchema as PacienteUncheckedCreateInputObjectSchema } from './objects/PacienteUncheckedCreateInput.schema';
import { PacienteUpdateInputObjectSchema as PacienteUpdateInputObjectSchema } from './objects/PacienteUpdateInput.schema';
import { PacienteUncheckedUpdateInputObjectSchema as PacienteUncheckedUpdateInputObjectSchema } from './objects/PacienteUncheckedUpdateInput.schema';

export const PacienteUpsertOneSchema: z.ZodType<Prisma.PacienteUpsertArgs> = z.object({ select: PacienteSelectObjectSchema.optional(), include: PacienteIncludeObjectSchema.optional(), where: PacienteWhereUniqueInputObjectSchema, create: z.union([ PacienteCreateInputObjectSchema, PacienteUncheckedCreateInputObjectSchema ]), update: z.union([ PacienteUpdateInputObjectSchema, PacienteUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PacienteUpsertArgs>;

export const PacienteUpsertOneZodSchema = z.object({ select: PacienteSelectObjectSchema.optional(), include: PacienteIncludeObjectSchema.optional(), where: PacienteWhereUniqueInputObjectSchema, create: z.union([ PacienteCreateInputObjectSchema, PacienteUncheckedCreateInputObjectSchema ]), update: z.union([ PacienteUpdateInputObjectSchema, PacienteUncheckedUpdateInputObjectSchema ]) }).strict();