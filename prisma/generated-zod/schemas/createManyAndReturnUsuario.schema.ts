import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { UsuarioSelectObjectSchema as UsuarioSelectObjectSchema } from './objects/UsuarioSelect.schema';
import { UsuarioCreateManyInputObjectSchema as UsuarioCreateManyInputObjectSchema } from './objects/UsuarioCreateManyInput.schema';

export const UsuarioCreateManyAndReturnSchema: z.ZodType<Prisma.UsuarioCreateManyAndReturnArgs> = z.object({ select: UsuarioSelectObjectSchema.optional(), data: z.union([ UsuarioCreateManyInputObjectSchema, z.array(UsuarioCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UsuarioCreateManyAndReturnArgs>;

export const UsuarioCreateManyAndReturnZodSchema = z.object({ select: UsuarioSelectObjectSchema.optional(), data: z.union([ UsuarioCreateManyInputObjectSchema, z.array(UsuarioCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();