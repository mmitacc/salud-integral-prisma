import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { PacienteSelectObjectSchema as PacienteSelectObjectSchema } from './objects/PacienteSelect.schema';
import { PacienteCreateManyInputObjectSchema as PacienteCreateManyInputObjectSchema } from './objects/PacienteCreateManyInput.schema';

export const PacienteCreateManyAndReturnSchema: z.ZodType<Prisma.PacienteCreateManyAndReturnArgs> = z.object({ select: PacienteSelectObjectSchema.optional(), data: z.union([ PacienteCreateManyInputObjectSchema, z.array(PacienteCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PacienteCreateManyAndReturnArgs>;

export const PacienteCreateManyAndReturnZodSchema = z.object({ select: PacienteSelectObjectSchema.optional(), data: z.union([ PacienteCreateManyInputObjectSchema, z.array(PacienteCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();