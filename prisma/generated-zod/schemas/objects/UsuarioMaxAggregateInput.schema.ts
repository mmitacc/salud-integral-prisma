import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  id_especialidad: z.literal(true).optional(),
  nombres: z.literal(true).optional(),
  apellidos: z.literal(true).optional(),
  telefono: z.literal(true).optional(),
  masculino: z.literal(true).optional(),
  fechanacimiento: z.literal(true).optional(),
  email: z.literal(true).optional(),
  password: z.literal(true).optional(),
  role: z.literal(true).optional(),
  username: z.literal(true).optional(),
  registerdate: z.literal(true).optional(),
  deleted: z.literal(true).optional()
}).strict();
export const UsuarioMaxAggregateInputObjectSchema: z.ZodType<Prisma.UsuarioMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioMaxAggregateInputType>;
export const UsuarioMaxAggregateInputObjectZodSchema = makeSchema();
