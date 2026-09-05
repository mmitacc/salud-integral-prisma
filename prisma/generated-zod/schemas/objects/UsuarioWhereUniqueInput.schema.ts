import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.email({ message: "El formato del correo electrónico no es válido" }).optional(),
  username: z.string().max(50).optional()
}).strict();
export const UsuarioWhereUniqueInputObjectSchema: z.ZodType<Prisma.UsuarioWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioWhereUniqueInput>;
export const UsuarioWhereUniqueInputObjectZodSchema = makeSchema();
