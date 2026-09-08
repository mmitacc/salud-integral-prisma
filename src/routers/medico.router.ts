import { Router } from "express";
import type { Request, Response } from "express";
import {
  agendaMedico,
  getAllMedico,
  getMedicoById,
  postMedico,
  putMedico,
  softDeleteMedico,
} from "../controllers/medico.controller";
import {
  MedicoWhereUniqueInputObjectSchema,
  MedicoUncheckedUpdateInputObjectSchema,
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
import createMedicoUsuarioSchema from "../schemas/create.medicoUsuario.schema";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.get(
  "/",
  validateQuerySchema(FiltrarEspecialidadQuerySchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Medico']
    #swagger.summary = 'Obtener y filtrar todos los Medicos'
    #swagger.description = 'Retorna toda la lista de medicos con sus campos: id , id_usuario, nombres, apellidos, telefono, email, masculino fechanacimiento, agenda, registerdate, espcialidad{}'
    #swagger.parameters['specialidad'] = {
        in: 'query',
        description: 'Filtrar por especialidad',
        required: true,
        type: 'string',
        format: 'date'
    }
    #swagger.responses = {
        200: {
            description: 'Medicos hallados satisfactoriamente.',
            schema: {
                type: 'array',
                items: { $ref: '#/definitions/Medico' }
            }
        },  
        404: {
            description: 'No hay Medicos en la BD.',
            schema: { error: 'No hay medicos en la BD.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    getAllMedico(req, res);
  },
);

router.get(
  "/:id",
  validateParamsSchema(MedicoWhereUniqueInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Medico']
    #swagger.summary = 'Obtener un medico por ID'
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico de la medico',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Medico encontrado',
            schema: {
              "id": 1,
              "nombres": "Carlos Alberto",
              "apellidos": "Mendoza Ortiz",
              "telefono": "09:00",
              "email": "carlos@gmail.com",
              "masculino": true,
              "fechanacimiento": "2026-09-09T14:00:00.000Z",
              "registerdate": "2026-09-04T19:15:15.667Z",
                  "especialidad": {
                    "id": 1,
                    "tipo": "Pediatría",
                    "registerdate": "2026-09-04T13:07:58.996Z"
                  }
            }
        },
        404: {
            description: 'No hay medico con id = 999',
            schema: { error: 'Medico no encontrado' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    getMedicoById(req, res);
  },
);
router.get(
  "/agenda/:id",
  authorize("ADMIN", "GERENCIA", "MEDICO"),
  validateParamsSchema(MedicoWhereUniqueInputObjectSchema),
  validateQuerySchema(RangoFechasQuerySchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Medico']
    #swagger.summary = 'Obtener la agenda de un medico'
    #swagger.description = 'Genera un reporte de consulta con estado PROGRAMADA, que puede ser filtrada por fechas.'    
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico de la medico',
    required: true,
    type: 'integer'
    }
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
    #swagger.responses = {
        200: {
            description: 'Agenda de un medico',
            schema: {
              "nombres": "Elena Sofia",
              "apellidos": "Gómez Rosas",
              "especialidad": "Cardiología",
              "consultas": [
                {
                  "fecha": "02/09/2026",
                  "horario": "14:00",
                  "pacienteId": 5,
                  "pacienteNombres": "Javier",
                  "pacienteApellidos": "Vásquez García"
                },
                {
                  "fecha": "06/09/2026",
                  "horario": "17:00",
                  "pacienteId": 2,
                  "pacienteNombres": "Andrés",
                  "pacienteApellidos": "Castro Sánchez"
                }
              ]
            }
        },
        404: {
            description: 'No hay medico con id = 999',
            schema: { error: 'Medico no encontrado' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    agendaMedico(req, res);
  },
);
router.post(
  "/",
  authorize("ADMIN", "GERENCIA"),
  validateBodySchema(createMedicoUsuarioSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Medico']
    #swagger.summary = 'Crear un nuevo medico'
    #swagger.requestBody = {
        description: 'Datos para nuevo medico',
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
                        fechanacimiento: { type: 'string', example: '2006-09-09' },
                        id_especialidad: { type: 'number', example: 1 }
                    }
                }
            }
        }
    }
    #swagger.responses = {
        201: {
            description: 'Medico creado con éxito',
            schema: {
              "id": 14,
              "nombres": "Elena Sofia",
              "apellidos": "Gómez Rosas",
              "telefono": "+51 948526348",
              "email": "elena@gmail.com",
              "masculino": true,
              "fechanacimiento": "2026-09-09T14:00:00.000Z",
              "especialidad": {
                "id": 1,
                "tipo": "Cardiología",
                "registerdate": "2026-09-04T13:07:58.996Z"
              }
            }
        },
        400: {
            description: 'No se pudo crear el medico',
            schema: { error: 'Faltan datos obligatorios.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    postMedico(req, res);
  },
);
router.put(
  "/:id",
  authorize("ADMIN", "GERENCIA"),
  validateParamsSchema(MedicoWhereUniqueInputObjectSchema),
  validateBodySchema(MedicoUncheckedUpdateInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Medico']
    #swagger.summary = 'Actualizar el nombre de un medico'
    #swagger.description = 'Modifica algun campo del registro de un medico buscando por su ID.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID numérico de la medico',
        required: true,
        type: 'number'
    }
    #swagger.requestBody = {
        description: 'Datos para nuevo medico',
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
                        fechanacimiento: { type: 'string', example: '2026-09-09T14:00:00.000Z' },
                        id_especialidad: { type: 'number', example: 1 }
                    }
                }
            }
        }
    }
    #swagger.responses = {
        200: {
            description: 'Medico actualizado con exito.',
            schema: {
              "id": 14,
              "nombres": "Elena Sofia",
              "apellidos": "Gómez Rosas",
              "telefono": "+51 948526348",
              "email": "elena@gmail.com",
              "masculino": true,
              "fechanacimiento": "2026-09-09T14:00:00.000Z",
              "especialidad": {
                "id": 1,
                "tipo": "Cardiología",
                "registerdate": "2026-09-04T13:07:58.996Z"
              }
            }
        },
        404: {
            description: 'No existe un medico con id = 999.',
            schema: { error: 'Medico no encontrado' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    putMedico(req, res);
  },
);

router.delete(
  "/:id",
  authorize("ADMIN", "GERENCIA"),
  validateParamsSchema(MedicoWhereUniqueInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Medico']
    #swagger.summary = 'Eliminar un medico y todas sus consultas relacionadas'
    #swagger.description = '⚠️ WARNING: Esta operación elimina permanentemente el registro del médico de la base de datos y ejecuta un borrado en cascada (ON DELETE CASCADE) de todas sus consultas y citas agendadas.'
    #swagger.security = [{ "bearerAuth": [] }]    
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico del medico',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Medico eliminado con éxito',
            schema: {
              "id": 14,
              "nombres": "Elena Sofia",
              "apellidos": "Gómez Rosas",
              "telefono": "+51 948526348",
              "email": "elena@gmail.com",
              "masculino": true,
              "fechanacimiento": "2026-09-09T14:00:00.000Z",
              "especialidad": {
                "id": 1,
                "tipo": "Cardiología",
                "registerdate": "2026-09-04T13:07:58.996Z"
              }
            }
        },
        404: {
            description: 'Medico no encontrado',
            schema: { error: 'Medico no encontrado' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    softDeleteMedico(req, res);
  },
);

export default router;
