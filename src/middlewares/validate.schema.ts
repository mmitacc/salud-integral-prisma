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
          error: z.treeifyError(result.error),
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
      const paramsNumericos: Record<string, number> = {};
      for (const key in req.params) {
        paramsNumericos[key] = Number(req.params[key]);
      }
      const result = await schema.safeParseAsync(paramsNumericos);
      if (!result.success) {
        res.status(400).json({
          status: "error",
          error: z.treeifyError(result.error),
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

export const validateQuerySchema = (schema: z.ZodType) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const result = await schema.safeParseAsync(req.query);
      if (!result.success) {
        res.status(400).json({
          status: "error",
          error: z.treeifyError(result.error),
        });
        return;
      }
      Object.keys(req.query).forEach((key) => delete req.query[key]);
      Object.assign(req.query, result.data);
      next();
    } catch (error) {
      const { statusCode, payload } = procesarErrorPrisma(error);
      res.status(statusCode).json(payload);
    }
  };
};
