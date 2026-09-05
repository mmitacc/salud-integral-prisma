import type { Prisma } from '../../generated-client/browser';
import * as z from 'zod';
import { UsuarioSelectObjectSchema as UsuarioSelectObjectSchema } from './objects/UsuarioSelect.schema';
import { UsuarioUpdateManyMutationInputObjectSchema as UsuarioUpdateManyMutationInputObjectSchema } from './objects/UsuarioUpdateManyMutationInput.schema';
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from './objects/UsuarioWhereInput.schema';

export const UsuarioUpdateManyAndReturnSchema: z.ZodType<Prisma.UsuarioUpdateManyAndReturnArgs> = z.object({ select: UsuarioSelectObjectSchema.optional(), data: UsuarioUpdateManyMutationInputObjectSchema, where: UsuarioWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UsuarioUpdateManyAndReturnArgs>;

export const UsuarioUpdateManyAndReturnZodSchema = z.object({ select: UsuarioSelectObjectSchema.optional(), data: UsuarioUpdateManyMutationInputObjectSchema, where: UsuarioWhereInputObjectSchema.optional() }).strict();