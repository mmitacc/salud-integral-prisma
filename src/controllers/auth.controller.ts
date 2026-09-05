import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, role, username } = req.body;
    if (!email || !password || !role || !username) {
      return res
        .status(400)
        .json({ message: "Faltan datos obligatorios, para crear un usuario" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const usuario = await prisma.usuario.create({
      data: { email, password: hashedPassword, role, username },
      select: { id: true, email: true, role: true },
    });

    res.status(201).json(usuario);
  } catch {
    res.status(500).json({ message: "Error al registrar el usuario" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.usuario.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        username: user.username,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "8h" },
    );
    res.json({ token });
  } catch {
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};
