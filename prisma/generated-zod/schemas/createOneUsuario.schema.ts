import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { UsuarioSelectObjectSchema as UsuarioSelectObjectSchema } from './objects/UsuarioSelect.schema';
import { UsuarioIncludeObjectSchema as UsuarioIncludeObjectSchema } from './objects/UsuarioInclude.schema';
import { UsuarioCreateInputObjectSchema as UsuarioCreateInputObjectSchema } from './objects/UsuarioCreateInput.schema';
import { UsuarioUncheckedCreateInputObjectSchema as UsuarioUncheckedCreateInputObjectSchema } from './objects/UsuarioUncheckedCreateInput.schema';

export const UsuarioCreateOneSchema: z.ZodType<Prisma.UsuarioCreateArgs> = z.object({ select: UsuarioSelectObjectSchema.optional(), include: UsuarioIncludeObjectSchema.optional(), data: z.union([UsuarioCreateInputObjectSchema, UsuarioUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.UsuarioCreateArgs>;

export const UsuarioCreateOneZodSchema = z.object({ select: UsuarioSelectObjectSchema.optional(), include: UsuarioIncludeObjectSchema.optional(), data: z.union([UsuarioCreateInputObjectSchema, UsuarioUncheckedCreateInputObjectSchema]) }).strict();