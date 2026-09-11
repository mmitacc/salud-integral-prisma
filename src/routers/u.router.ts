import { Router } from "express";
import type { Request, Response } from "express";
import {
  getAllUsuarios,
  getUsuarioById,
  putPasswordUsuario,
  putUsuario,
  softDeleteUsuario,
} from "../controllers/u.controller";
import {
  UsuarioWhereUniqueInputObjectSchema,
  UsuarioUncheckedUpdateInputObjectSchema,
} from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
} from "../middlewares/validate.schema";
import updatePasswordSchema from "../schemas/password.schema";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.get(
  "/",
  authorize("GERENCIA", "ADMIN"),
  (reg: Request, res: Response) => {
    /*  
    #swagger.tags = ['Usuario']
    #swagger.summary = 'Obtener y filtrar todos los Usuarios'
    #swagger.description = 'Retorna toda la lista de usuarios con sus campos: id ,email, usernme, role, registerdate.'
    #swagger.responses = {
        200: {
            description: 'Usuarios hallados satisfactoriamente.',
            schema: {
                type: 'array',
                items: { $ref: '#/definitions/Usuario' }
            }
        },  
        404: {
            description: 'No hay Usuarios en la BD.',
            schema: { error: 'No hay usuarios en la BD.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
  }
  */
    getAllUsuarios(reg, res);
  },
);

router.get(
  "/:id",
  authorize("GERENCIA", "ADMIN"),
  validateParamsSchema(UsuarioWhereUniqueInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Usuario']
    #swagger.summary = 'Obtener un usuario por ID'
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico de un usuario',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Usuario encontrado',
            schema: {
              "id": 1,
              "email": "manu@hotmail.com",
              "username": "manu",
              "role": "ADMIN",
              "registerdate": "2026-09-04T13:07:58.996Z"
            }
        },
        404: {
            description: 'No existe un usuario con id = 999.',
            schema: { error: 'Usuario no encontrado' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    getUsuarioById(req, res);
  },
);

router.put(
  "/password",
  validateBodySchema(updatePasswordSchema),
  (req: Request, res: Response) => {
    /* 
    #swagger.tags = ['Usuario']
    #swagger.summary = 'Actualizar solo el password de un mismo usuario autenticado'
    #swagger.description = 'Modifica solo el password de un usuario logueado correctamente.'
    #swagger.requestBody = {
        description: 'Solo se puede actualizar el email, role y/o username de un usuario',
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {                
                      "username": {type: 'string', example: "man"},
                      "password": {type: 'string', example: "Password123"},
                      "oldPassword": {type: 'string', example: "password_anterior"}
                    }
                }
            }
        }
    }
    #swagger.responses = {
        200: {
            description: 'Actualización del password exitoso.',
            schema: {
              "email": "man@mail.com",
              "username": "man",
            }
        },
        404: {
            description: 'Solo el usuario propio puede cambiar su contraseña',
            schema: { error: 'Solo el usuario propio puede cambiar su contraseña' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    putPasswordUsuario(req, res);
  },
);

router.put(
  "/:id",
  authorize("GERENCIA", "ADMIN"),
  validateParamsSchema(UsuarioWhereUniqueInputObjectSchema),
  validateBodySchema(UsuarioUncheckedUpdateInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Usuario']
    #swagger.summary = 'Actualizar el email, role y/o username de un usuario'
    #swagger.description = 'Modifica el campo email, role y/o username, de un usuario buscando por su ID.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID numérico de un usuario',
        required: true,
        type: 'number'
    }
    #swagger.requestBody = {
        description: 'Solo se puede actualizar el email, role y/o username de un usuario',
        required: true,
          content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {                
                      "email": {type: 'string', example: "man@mail.com"},
                      "username": {type: 'string', example: "man"},
                      "role": {type: 'string', example: "ADMIN"},
                    }
                }
            }
        }
    }
    #swagger.responses = {
        200: {
            description: 'Usuario actualizado con exito.',
            schema: {
              "id": 13,
              "email": "man@mail.com",
              "username": "man",
              "role": "ADMIN",
              "registerdate": "2026-09-04T22:43:28.015Z"
            }
        },
        404: {
            description: 'No existe un usuario con id = 999.',
            schema: { error: 'Usuario no encontrado' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    putUsuario(req, res);
  },
);

router.delete(
  "/:id",
  authorize("GERENCIA", "ADMIN"),
  validateParamsSchema(UsuarioWhereUniqueInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Usuario']
    #swagger.summary = 'Eliminar un usuario'
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico de un usuario',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Usuario eliminado con éxito',
            schema: {
              "id": 13,
              "email": "manu@hotmail.com",
              "username": "manu",
              "role": "ADMIN",
              "registerdate": "2026-09-04T22:43:28.015Z"
            }
        },
        404: {
            description: 'Usuario no encontrado',
            schema: { error: 'Usuario no encontrado' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    softDeleteUsuario(req, res);
  },
);

export default router;
