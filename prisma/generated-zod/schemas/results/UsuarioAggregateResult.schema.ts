import * as z from 'zod';
export const UsuarioAggregateResultSchema = z.object({  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    email: z.number().optional(),
    password: z.number().optional(),
    role: z.number().optional(),
    username: z.number().optional(),
    registerdate: z.number().optional(),
    deleted: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    email: z.string().nullable().optional(),
    password: z.string().nullable().optional(),
    role: z.unknown().nullable().optional(),
    username: z.string().nullable().optional(),
    registerdate: z.date().nullable().optional(),
    deleted: z.boolean().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    email: z.string().nullable().optional(),
    password: z.string().nullable().optional(),
    role: z.unknown().nullable().optional(),
    username: z.string().nullable().optional(),
    registerdate: z.date().nullable().optional(),
    deleted: z.boolean().nullable().optional()
  }).nullable().optional()});