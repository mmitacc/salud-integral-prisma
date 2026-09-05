import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { UsuarioSelectObjectSchema as UsuarioSelectObjectSchema } from './objects/UsuarioSelect.schema';
import { UsuarioIncludeObjectSchema as UsuarioIncludeObjectSchema } from './objects/UsuarioInclude.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './objects/UsuarioWhereUniqueInput.schema';
import { UsuarioCreateInputObjectSchema as UsuarioCreateInputObjectSchema } from './objects/UsuarioCreateInput.schema';
import { UsuarioUncheckedCreateInputObjectSchema as UsuarioUncheckedCreateInputObjectSchema } from './objects/UsuarioUncheckedCreateInput.schema';
import { UsuarioUpdateInputObjectSchema as UsuarioUpdateInputObjectSchema } from './objects/UsuarioUpdateInput.schema';
import { UsuarioUncheckedUpdateInputObjectSchema as UsuarioUncheckedUpdateInputObjectSchema } from './objects/UsuarioUncheckedUpdateInput.schema';

export const UsuarioUpsertOneSchema: z.ZodType<Prisma.UsuarioUpsertArgs> = z.object({ select: UsuarioSelectObjectSchema.optional(), include: UsuarioIncludeObjectSchema.optional(), where: UsuarioWhereUniqueInputObjectSchema, create: z.union([ UsuarioCreateInputObjectSchema, UsuarioUncheckedCreateInputObjectSchema ]), update: z.union([ UsuarioUpdateInputObjectSchema, UsuarioUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.UsuarioUpsertArgs>;

export const UsuarioUpsertOneZodSchema = z.object({ select: UsuarioSelectObjectSchema.optional(), include: UsuarioIncludeObjectSchema.optional(), where: UsuarioWhereUniqueInputObjectSchema, create: z.union([ UsuarioCreateInputObjectSchema, UsuarioUncheckedCreateInputObjectSchema ]), update: z.union([ UsuarioUpdateInputObjectSchema, UsuarioUncheckedUpdateInputObjectSchema ]) }).strict();