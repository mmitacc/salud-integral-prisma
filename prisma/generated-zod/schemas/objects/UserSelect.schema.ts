import * as z from 'zod';
import type { Prisma } from '../../../generated-client/browser';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  role: z.boolean().optional(),
  username: z.boolean().optional(),
  nombres: z.boolean().optional(),
  apellidos: z.boolean().optional(),
  telefono: z.boolean().optional(),
  activo: z.boolean().optional(),
  registerdate: z.boolean().optional(),
  deleted: z.boolean().optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
