import type { Request, Response } from "express";
import { usuarioModel } from "../models/usuario.model";
import procesarErrorPrisma from "../utils/errorHandlerUtil";
import bcrypt from "bcryptjs";

export const getAllUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await usuarioModel.findAll();
    res.status(200).json({ total: usuarios.length, data: usuarios });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const getUsuarioById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const usuario = await usuarioModel.findFirst(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrada" });
    }
    const { password, ...usuarioData } = usuario;
    res.status(200).json({ message: "Usuario encontrado", data: usuarioData });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const putUsuario = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const usuario = await usuarioModel.findFirst(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    const { username, email, role } = req.body;
    const updatedUsuario = await usuarioModel.update(id, email, role, username);
    return res.json({
      message: "Usuario actualizado con éxito",
      data: updatedUsuario,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const putPasswordUsuario = async (req: Request, res: Response) => {
  try {
    const id = Number(req.user?.id);
    const usuario = await usuarioModel.findFirst(id);
    if (!usuario) {
      return res
        .status(404)
        .json({ error: "Usuario no encontrado en el sistema" });
    }
    const { username, oldPassword, password } = req.body;
    if (username !== req.user?.username) {
      return res
        .status(404)
        .json({ error: "Nombre de usuario no identificado" });
    }
    const isMatch = await bcrypt.compare(oldPassword, usuario.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ error: "La contraseña actual 'oldPassword' es incorrecta" });
    }
    const hashedPassword: string = await bcrypt.hash(password, 10);
    const updatedPasswordUsuario = await usuarioModel.updatePassword(
      id,
      hashedPassword,
    );
    return res.json({
      message: "Actualización del password exitoso",
      data: updatedPasswordUsuario,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const softDeleteUsuario = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const usuario = await usuarioModel.findFirst(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    const softDeletedUsuario = await usuarioModel.softDelete(id);
    return res.json({
      message: "Usuario eliminado con éxito",
      data: softDeletedUsuario,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const usuario = await usuarioModel.findFirst(id);
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    const deletedUsuario = await usuarioModel.deleteAdmin(id);
    return res.json({
      message: "Especialidad eliminada con éxito",
      data: deletedUsuario,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};

export const getAllUsuarioDeleted = async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query as {
      fechaInicio: string;
      fechaFin: string;
    };
    const usuarios = await usuarioModel.findAllDeleted(
      fechaInicio ? new Date(fechaInicio) : undefined,
      fechaFin ? new Date(fechaFin) : undefined,
    );
    if (usuarios.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron especialidades eliminadas" });
    }
    res.status(200).json({
      "total eliminados": usuarios.length,
      data: usuarios,
    });
  } catch (error) {
    const { statusCode, payload } = procesarErrorPrisma(error);
    res.status(statusCode).json(payload);
  }
};
