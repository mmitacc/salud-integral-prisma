import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { CitaSelectObjectSchema as CitaSelectObjectSchema } from './objects/CitaSelect.schema';
import { CitaUpdateManyMutationInputObjectSchema as CitaUpdateManyMutationInputObjectSchema } from './objects/CitaUpdateManyMutationInput.schema';
import { CitaWhereInputObjectSchema as CitaWhereInputObjectSchema } from './objects/CitaWhereInput.schema';

export const CitaUpdateManyAndReturnSchema: z.ZodType<Prisma.CitaUpdateManyAndReturnArgs> = z.object({ select: CitaSelectObjectSchema.optional(), data: CitaUpdateManyMutationInputObjectSchema, where: CitaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CitaUpdateManyAndReturnArgs>;

export const CitaUpdateManyAndReturnZodSchema = z.object({ select: CitaSelectObjectSchema.optional(), data: CitaUpdateManyMutationInputObjectSchema, where: CitaWhereInputObjectSchema.optional() }).strict();