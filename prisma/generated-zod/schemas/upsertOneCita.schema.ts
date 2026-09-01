import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { CitaSelectObjectSchema as CitaSelectObjectSchema } from './objects/CitaSelect.schema';
import { CitaIncludeObjectSchema as CitaIncludeObjectSchema } from './objects/CitaInclude.schema';
import { CitaWhereUniqueInputObjectSchema as CitaWhereUniqueInputObjectSchema } from './objects/CitaWhereUniqueInput.schema';
import { CitaCreateInputObjectSchema as CitaCreateInputObjectSchema } from './objects/CitaCreateInput.schema';
import { CitaUncheckedCreateInputObjectSchema as CitaUncheckedCreateInputObjectSchema } from './objects/CitaUncheckedCreateInput.schema';
import { CitaUpdateInputObjectSchema as CitaUpdateInputObjectSchema } from './objects/CitaUpdateInput.schema';
import { CitaUncheckedUpdateInputObjectSchema as CitaUncheckedUpdateInputObjectSchema } from './objects/CitaUncheckedUpdateInput.schema';

export const CitaUpsertOneSchema: z.ZodType<Prisma.CitaUpsertArgs> = z.object({ select: CitaSelectObjectSchema.optional(), include: CitaIncludeObjectSchema.optional(), where: CitaWhereUniqueInputObjectSchema, create: z.union([ CitaCreateInputObjectSchema, CitaUncheckedCreateInputObjectSchema ]), update: z.union([ CitaUpdateInputObjectSchema, CitaUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CitaUpsertArgs>;

export const CitaUpsertOneZodSchema = z.object({ select: CitaSelectObjectSchema.optional(), include: CitaIncludeObjectSchema.optional(), where: CitaWhereUniqueInputObjectSchema, create: z.union([ CitaCreateInputObjectSchema, CitaUncheckedCreateInputObjectSchema ]), update: z.union([ CitaUpdateInputObjectSchema, CitaUncheckedUpdateInputObjectSchema ]) }).strict();