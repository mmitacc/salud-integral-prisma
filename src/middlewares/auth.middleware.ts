import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthPayload {
  id: number;
  email: string;
  username: string;
  role: "RECEPCIONISTA" | "MEDICO" | "GERENCIA" | "ADMIN";
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthPayload;
    }
  }
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }
  const token = header.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Formato de token inválido" });
  }
  try {
    req.user = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as AuthPayload;
    next();
  } catch {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};
