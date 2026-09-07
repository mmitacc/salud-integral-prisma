import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import procesarErrorPrisma from "../utils/errorHandlerUtil";

// Validamos y transformamos los query params que vienen del Frontend
export const PaginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  search: z.string().optional(),
});

// Tipado estricto para TypeScript en tus controladores
export type PaginationQuery = z.infer<typeof PaginationQuerySchema>;

export const parsePagination = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Validamos, aplicamos defaults y sobreescribimos req.query con los datos tipados
    req.query = PaginationQuerySchema.parse(req.query) as any;
    next();
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};
