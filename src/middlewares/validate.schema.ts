import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import procesarErrorPrisma from "../utils/errorHandlerUtil";

export const validateBodySchema = (schema: z.ZodType) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const result = await schema.safeParseAsync(req.body);
      if (!result.success) {
        res.status(400).json({
          status: "error",
          error: "Parámetros inválidos en la URL",
          detalles: result.error.issues.map((err) => ({
            parametro: err.path.join("."),
            mensaje: err.message,
          })),
        });
        return;
      }
      req.body = result.data;
      next();
    } catch (error) {
      const { statusCode, payload } = procesarErrorPrisma(error);
      res.status(statusCode).json(payload);
    }
  };
};

export const validateParamsSchema = (schema: z.ZodType) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const result = await schema.safeParse(req.params);
      if (!result.success) {
        res.status(400).json({
          status: "error",
          error: "Parámetros inválidos en la URL",
          detalles: result.error.issues.map((err) => ({
            parametro: err.path.join("."),
            mensaje: err.message,
          })),
        });
        return;
      }
      req.params = result.data as any;
      next();
    } catch (error) {
      if (error instanceof Error) {
        const { statusCode, payload } = procesarErrorPrisma(error);
        res.status(statusCode).json(payload);
      }
    }
  };
};
