import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { CitaSelectObjectSchema as CitaSelectObjectSchema } from './objects/CitaSelect.schema';
import { CitaIncludeObjectSchema as CitaIncludeObjectSchema } from './objects/CitaInclude.schema';
import { CitaUpdateInputObjectSchema as CitaUpdateInputObjectSchema } from './objects/CitaUpdateInput.schema';
import { CitaUncheckedUpdateInputObjectSchema as CitaUncheckedUpdateInputObjectSchema } from './objects/CitaUncheckedUpdateInput.schema';
import { CitaWhereUniqueInputObjectSchema as CitaWhereUniqueInputObjectSchema } from './objects/CitaWhereUniqueInput.schema';

export const CitaUpdateOneSchema: z.ZodType<Prisma.CitaUpdateArgs> = z.object({ select: CitaSelectObjectSchema.optional(), include: CitaIncludeObjectSchema.optional(), data: z.union([CitaUpdateInputObjectSchema, CitaUncheckedUpdateInputObjectSchema]), where: CitaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CitaUpdateArgs>;

export const CitaUpdateOneZodSchema = z.object({ select: CitaSelectObjectSchema.optional(), include: CitaIncludeObjectSchema.optional(), data: z.union([CitaUpdateInputObjectSchema, CitaUncheckedUpdateInputObjectSchema]), where: CitaWhereUniqueInputObjectSchema }).strict();