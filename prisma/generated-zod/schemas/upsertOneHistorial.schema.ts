import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { HistorialSelectObjectSchema as HistorialSelectObjectSchema } from './objects/HistorialSelect.schema';
import { HistorialIncludeObjectSchema as HistorialIncludeObjectSchema } from './objects/HistorialInclude.schema';
import { HistorialWhereUniqueInputObjectSchema as HistorialWhereUniqueInputObjectSchema } from './objects/HistorialWhereUniqueInput.schema';
import { HistorialCreateInputObjectSchema as HistorialCreateInputObjectSchema } from './objects/HistorialCreateInput.schema';
import { HistorialUncheckedCreateInputObjectSchema as HistorialUncheckedCreateInputObjectSchema } from './objects/HistorialUncheckedCreateInput.schema';
import { HistorialUpdateInputObjectSchema as HistorialUpdateInputObjectSchema } from './objects/HistorialUpdateInput.schema';
import { HistorialUncheckedUpdateInputObjectSchema as HistorialUncheckedUpdateInputObjectSchema } from './objects/HistorialUncheckedUpdateInput.schema';

export const HistorialUpsertOneSchema: z.ZodType<Prisma.HistorialUpsertArgs> = z.object({ select: HistorialSelectObjectSchema.optional(), include: HistorialIncludeObjectSchema.optional(), where: HistorialWhereUniqueInputObjectSchema, create: z.union([ HistorialCreateInputObjectSchema, HistorialUncheckedCreateInputObjectSchema ]), update: z.union([ HistorialUpdateInputObjectSchema, HistorialUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.HistorialUpsertArgs>;

export const HistorialUpsertOneZodSchema = z.object({ select: HistorialSelectObjectSchema.optional(), include: HistorialIncludeObjectSchema.optional(), where: HistorialWhereUniqueInputObjectSchema, create: z.union([ HistorialCreateInputObjectSchema, HistorialUncheckedCreateInputObjectSchema ]), update: z.union([ HistorialUpdateInputObjectSchema, HistorialUncheckedUpdateInputObjectSchema ]) }).strict();