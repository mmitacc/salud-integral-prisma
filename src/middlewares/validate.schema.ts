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

// **********************************************************************

// El esquema que recibe ahora puede tener propiedades opcionales para params, query o body
export const validateRequest = (schema: z.ZodObject<any>) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // Validamos un objeto compuesto por las tres fuentes de Express
      const result = await schema.safeParseAsync({
        params: req.params,
        query: req.query,
        body: req.body,
      });

      if (!result.success) {
        res.status(400).json({
          status: "error",
          error: z.treeifyError
            ? z.treeifyError(result.error)
            : result.error.format(),
        });
        return;
      }
      // Reemplazamos los datos originales con los datos limpios/transformados por Zod
      if (result.data.params) {
        Object.keys(req.params).forEach((key) => delete req.params[key]);
        Object.assign(req.params, result.data.params);
      }
      if (result.data.query) {
        Object.keys(req.query).forEach((key) => delete req.query[key]);
        Object.assign(req.query, result.data.query);
      }
      if (result.data.body) {
        Object.keys(req.body).forEach((key) => delete req.body[key]);
        Object.assign(req.body, result.data.body);
      }

      next();
    } catch (error) {
      const { statusCode, payload } = procesarErrorPrisma(error);
      res.status(statusCode).json(payload);
    }
  };
};
