import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { CitaSelectObjectSchema as CitaSelectObjectSchema } from './objects/CitaSelect.schema';
import { CitaIncludeObjectSchema as CitaIncludeObjectSchema } from './objects/CitaInclude.schema';
import { CitaCreateInputObjectSchema as CitaCreateInputObjectSchema } from './objects/CitaCreateInput.schema';
import { CitaUncheckedCreateInputObjectSchema as CitaUncheckedCreateInputObjectSchema } from './objects/CitaUncheckedCreateInput.schema';

export const CitaCreateOneSchema: z.ZodType<Prisma.CitaCreateArgs> = z.object({ select: CitaSelectObjectSchema.optional(), include: CitaIncludeObjectSchema.optional(), data: z.union([CitaCreateInputObjectSchema, CitaUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CitaCreateArgs>;

export const CitaCreateOneZodSchema = z.object({ select: CitaSelectObjectSchema.optional(), include: CitaIncludeObjectSchema.optional(), data: z.union([CitaCreateInputObjectSchema, CitaUncheckedCreateInputObjectSchema]) }).strict();