import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { UsuarioSelectObjectSchema as UsuarioSelectObjectSchema } from './objects/UsuarioSelect.schema';
import { UsuarioIncludeObjectSchema as UsuarioIncludeObjectSchema } from './objects/UsuarioInclude.schema';
import { UsuarioUpdateInputObjectSchema as UsuarioUpdateInputObjectSchema } from './objects/UsuarioUpdateInput.schema';
import { UsuarioUncheckedUpdateInputObjectSchema as UsuarioUncheckedUpdateInputObjectSchema } from './objects/UsuarioUncheckedUpdateInput.schema';
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from './objects/UsuarioWhereUniqueInput.schema';

export const UsuarioUpdateOneSchema: z.ZodType<Prisma.UsuarioUpdateArgs> = z.object({ select: UsuarioSelectObjectSchema.optional(), include: UsuarioIncludeObjectSchema.optional(), data: z.union([UsuarioUpdateInputObjectSchema, UsuarioUncheckedUpdateInputObjectSchema]), where: UsuarioWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UsuarioUpdateArgs>;

export const UsuarioUpdateOneZodSchema = z.object({ select: UsuarioSelectObjectSchema.optional(), include: UsuarioIncludeObjectSchema.optional(), data: z.union([UsuarioUpdateInputObjectSchema, UsuarioUncheckedUpdateInputObjectSchema]), where: UsuarioWhereUniqueInputObjectSchema }).strict();