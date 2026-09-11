import { Router } from "express";
import type { Request, Response } from "express";
import {
  agendaMedico,
  getAllMedico,
  getAll,
  getUsuarioById,
  postUsuario,
  putUsuario,
  softDeleteUsuario,
} from "../controllers/usuario.controller";
import {
  UsuarioWhereUniqueInputObjectSchema,
  UsuarioUncheckedUpdateInputObjectSchema,
} from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
  validateQuerySchema,
} from "../middlewares/validate.schema";
import {
  FiltrarEspecialidadQuerySchema,
  RangoFechasQuerySchema,
} from "../schemas/querys.schema";
import createUsuarioSchema from "../schemas/createUsuario.schema";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  /*
    #swagger.tags = ['Usuario']
    #swagger.summary = 'Retorna todos los Usuario'
    #swagger.description = 'Retorna toda la lista de usuarios con todos sus campos.'
    */
  getAll(req, res);
});

router.get(
  "/medico",
  validateQuerySchema(FiltrarEspecialidadQuerySchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Usuario']
    #swagger.summary = 'Obtener y filtrar todos los Medicos'
    #swagger.description = 'Retorna toda la lista de medicos con sus campos: id , id_usuario, nombres, apellidos, telefono, email, masculino fechanacimiento, agenda, registerdate, espcialidad{}'
    #swagger.parameters['especialidad'] = {
        in: 'query',
        description: 'Filtrar por especialidad',
        required: false,
        type: 'string',
        format: 'date'
    }
    */
    getAllMedico(req, res);
  },
);

router.get(
  "/medico/agenda",
  authorize("ADMIN", "GERENCIA", "MEDICO"),
  validateQuerySchema(RangoFechasQuerySchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Usuario']
    #swagger.summary = 'Obtener la agenda de un medico que debe estar logueado'
    #swagger.description = 'Genera un reporte de consulta con estado PROGRAMADA, que puede ser filtrada por fechas.'    
    #swagger.parameters['fechaInicio'] = {
        in: 'query',
        description: 'Fecha de inicio de la consulta',
        required: false,
        type: 'string',
        format: 'date'
    }
    #swagger.parameters['fechaFin'] = {
        in: 'query',
        description: 'Fecha de fin de la consulta',
        required: false,
        type: 'string',
        format: 'date'
    }     
    */
    agendaMedico(req, res);
  },
);

router.get(
  "/:id",
  validateParamsSchema(UsuarioWhereUniqueInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Usuario']
    #swagger.summary = 'Obtener un Usuario por ID'
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico del Usuario',
    required: true,
    type: 'integer'
    }
    */
    getUsuarioById(req, res);
  },
);

router.post(
  "/",
  authorize("ADMIN", "GERENCIA"),
  validateBodySchema(createUsuarioSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Usuario']
    #swagger.summary = 'Crear un nuevo Usuario'
    #swagger.requestBody = {
        description: 'Datos para nuevo Usuario',
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        nombres: { type: 'string', example: 'Elena Sofia' },
                        apellidos: { type: 'string', example: 'Gómez Rosas' },
                        username: { type: 'string', example: 'es' },
                        password: { type: 'string', example: '123456' },
                        email: { type: 'string', example: 'es@gmail.com' },
                        telefono: { type: 'string', example: '+51 948526348' },
                        masculino: { type: 'boolean', example: false },
                        role: { type: 'string', example: 'MEDICO' },
                        fechanacimiento: { type: 'string', example: '2006-09-09' },
                        id_especialidad: { type: 'number', example: 1 }
                    }
                }
            }
        }
    }
    */
    postUsuario(req, res);
  },
);
router.put(
  "/:id",
  authorize("ADMIN", "GERENCIA"),
  validateParamsSchema(UsuarioWhereUniqueInputObjectSchema),
  validateBodySchema(UsuarioUncheckedUpdateInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Usuario']
    #swagger.summary = 'Actualizar los datos de un Usuario'
    #swagger.description = 'Modifica algun campo del registro de un Usuario buscando por su ID.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID numérico de la Usuario',
        required: true,
        type: 'number'
    }
    #swagger.requestBody = {
        description: 'Datos para actualizar un Usuario',
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        nombres: { type: 'string', example: 'Elena Sofia' },
                        apellidos: { type: 'string', example: 'Gómez Rosas' },
                        email: { type: 'string', example: 'elena@gmail.com' },
                        telefono: { type: 'string', example: '+51 948526348' },
                        masculino: { type: 'boolean', example: true },
                        role: { type: 'string', example: 'MEDICO' },
                        fechanacimiento: { type: 'string', example: '2026-09-09T14:00:00.000Z' },
                        id_especialidad: { type: 'number', example: 1 }
                    }
                }
            }
        }
    }
    */
    putUsuario(req, res);
  },
);

router.delete(
  "/:id",
  authorize("ADMIN", "GERENCIA"),
  validateParamsSchema(UsuarioWhereUniqueInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Usuario']
    #swagger.summary = 'Eliminar un Usuario'
    #swagger.description = 'Elimina el registro del Usuario.'
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico del Usuario',
    required: true,
    type: 'integer'
    }
    */
    softDeleteUsuario(req, res);
  },
);

export default router;
