import { Router } from "express";
import type { Request, Response } from "express";
import {
  corteOperativo,
  getAllConsultas,
  getConsultaById,
  putConsulta,
  softDeleteConsulta,
  postCita,
  putEstadoCita,
  rentabilidadArea,
} from "../controllers/consulta.controller";
import {
  ConsultaWhereUniqueInputObjectSchema,
  ConsultaUncheckedUpdateInputObjectSchema,
} from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
  validateQuerySchema,
} from "../middlewares/validate.schema";
import { RangoFechasQuerySchema } from "../schemas/querys.schema";
import CrearConsultaSchema from "../schemas/cita.schema";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  /*  
    #swagger.tags = ['Consulta']
    #swagger.summary = 'Obtener y filtrar todos los Consultas/citas'
    #swagger.description = 'Retorna toda la lista de consultas/citas con sus campos: estado, costo, citadate, id_paciente, id_medico.'
    #swagger.responses = {
        200: {
            description: 'Consultas halladas satisfactoriamente.',
            schema: {
                type: 'array',
                items: { $ref: '#/definitions/Consulta' }
            }
        },  
        404: {
            description: 'No hay Consultas en la BD.',
            schema: { error: 'No hay consultas/citas en la BD.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
  getAllConsultas(req, res);
});

router.get("/corte-operativo", authorize("GERENCIA"), (req, res) => {
  /*  
    #swagger.tags = ['Consulta']
    #swagger.summary = 'Obtener Corte Operativo Diario para las Gerencias'
    #swagger.description = 'Retorna 2 registros con los datos de la Corte Operativo Diario para las Gerencias de acuerdo a los parametros de fechas inicio y fin'
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
            description: 'Corte Operativo Diario hallado satisfactoriamente.',
            schema: {
                type: 'array',
                items: { $ref: '#/definitions/Consulta' }
            }
        },  
        404: {
            description: 'No hay Consultas, revise que la fechaInicio <= fechaFin en la consulta.',
            schema: { error: 'No hay reporte en la BD.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
  corteOperativo(req, res);
});

router.get("/rentabilidad", authorize("GERENCIA"), (req, res) => {
  /*  
    #swagger.tags = ['Consulta']
    #swagger.summary = 'Obtener conteo de consultas programadas a la fecha por especialización medica'
    #swagger.description = 'Retorna toda la lista de especialidades con sus campos: id (especialidad),tipo, total_programadas.'
    #swagger.responses = {
        200: {
            description: 'Reporte exitoso, rentabilidad por area',
            schema: {
                type: 'array',
                items: { $ref: '#/definitions/Consulta' }
            }
        },  
        404: {
            description: 'No hay Consultas en la BD.',
            schema: { error: 'No hay consultas/citas en la BD.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
  rentabilidadArea;
});

router.get(
  "/:id",
  validateParamsSchema(ConsultaWhereUniqueInputObjectSchema),
  (req, res) => {
    /*
    #swagger.tags = ['Consulta']
    #swagger.summary = 'Obtener una consulta/cita por ID'
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico de la consulta',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Busqueda exitosa',
            schema: {
              "id": 1,
              "fecha": "1/9/2026",
              "horario": "09:00",
              "costo": 60,
              "estado": "COMPLETADA",
              "paciente": {
                "id": 1,
                "nombres": "Laura",
                "apellidos": "Díaz Mendoza"
              },
              "medico": {
                "id": 1,
                "nombres": "Carlos Alberto",
                "apellidos": "Mendoza Ortiz"
              },
              "registerdate": "4/9/2026"
            }
        },
        404: {
            description: 'No hay consulas/citas con id = 999',
            schema: { error: 'Consulta/Cita no encontrada' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    getConsultaById(req, res);
  },
);

router.post(
  "/",
  authorize("RECEPCIONISTA", "GERENCIA", "ADMIN"),
  validateBodySchema(CrearConsultaSchema),
  (req, res) => {
    /*
    #swagger.tags = ['Consulta']
    #swagger.summary = 'Crear una nueva consulta/cita'
    #swagger.requestBody = {
        description: 'Datos para nueva consulta/cita',
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        fecha: { type: 'string', example: '2026-09-09' },
                        horario: { type: 'string', example: '09:00' },
                        costo: { type: 'number', example: 60 },
                        id_paciente: { type: 'number', example: 2 },
                        id_medico: { type: 'number', example: 2 },
                    }
                }
            }
        }
    }
    #swagger.responses = {
        201: {
            description: 'Registro de nuevo menu, exitoso',
            schema: {
              "fecha": "2026-09-09",
              "horario": "09:00",
              "id": 13,
              "id_paciente": 2,
              "id_medico": 2,
              "estado": "PROGRAMADA",
              "costo": "60",
              "registerdate": "2026-09-04T19:15:15.667Z"
            }
        },
        400: {
            description: 'No se pudo registrar la consulta/cita',
            schema: { error: 'Faltan datos obligatorios.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    postCita(req, res);
  },
);

router.put(
  "/:id",
  authorize("RECEPCIONISTA", "GERENCIA", "ADMIN"),
  validateParamsSchema(ConsultaWhereUniqueInputObjectSchema),
  validateBodySchema(ConsultaUncheckedUpdateInputObjectSchema),
  (req, res) => {
    /*
    #swagger.tags = ['Consulta']
    #swagger.summary = 'Actualizar algun dato de una consulta/cita'
    #swagger.description = 'Modifica todos campos (costo, fecha, horario, id_paciente, id_medico) de un Producto buscando por su ID.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID numérico de la consulta/cita',
        required: true,
        type: 'number'
    }
    #swagger.requestBody = {
        description: 'Campos que se desean actualizar. Puede actualizar uno o todos los campos de la consulta/cita',
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        fecha: { type: 'string', example: '2026-09-09' },
                        horario: { type: 'string', example: '09:00' },
                        costo: { type: 'number', example: 60 },
                        id_paciente: { type: 'number', example: 2 },
                        id_medico: { type: 'number', example: 2 },
                    }
                }
            }
        }
    }
    #swagger.responses = {
        200: {
            description: 'Consulta/Cita actualizada, exitosamente.',
            schema: {
              "fecha": "2026-09-09",
              "horario": "09:00",
              "costo": 60,
              "id_paciente": 2,
              "id_medico": 2
            }
        },
        404: {
            description: 'No hay productos con id = 999.',
            schema: { error: 'Producto no encontrado en la BD.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    putConsulta(req, res);
  },
);

router.put(
  "/cita/:id",
  authorize("MEDICO", "GERENCIA", "ADMIN"),
  validateParamsSchema(ConsultaWhereUniqueInputObjectSchema),
  validateBodySchema(ConsultaUncheckedUpdateInputObjectSchema),
  (req, res) => {
    /*
    #swagger.tags = ['Consulta']
    #swagger.summary = 'Actualizar solo el estado de una consulta/cita'
    #swagger.description = 'Modifica solo el estado de una consulta/cita buscando por su ID.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID numérico de la consulta/cita',
        required: true,
        type: 'number'
    }
    #swagger.requestBody = {
        description: 'Solo puede actualizar un campo de la consulta/cita',
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                        estado: { type: 'string', example: 'COMPLETADA' },
                    }
                }
            }
        }
    }
    #swagger.responses = {
        200: {
            description: 'Estado de la consulta/cita actualizado, exitosamente.',
            schema: {
              "estado": "COMPLETADA",
            }
        },
        404: {
            description: 'No hay una consulta/cita con id = 999.',
            schema: { error: 'Consulta/Cita no encontrada' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    putEstadoCita(req, res);
  },
);

router.delete(
  "/:id",
  authorize("GERENCIA", "ADMIN"),
  validateParamsSchema(ConsultaWhereUniqueInputObjectSchema),
  (req, res) => {
    /*
    #swagger.tags = ['Consulta']
    #swagger.summary = 'Eliminar una consulta/cita'
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico de la consulta/cita',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Eliminación exitosa',
            schema: {
              "id": 13,
              "id_paciente": 2,
              "id_medico": 2,
              "estado": "PROGRAMADA",
              "citadate": "2026-09-09T14:00:00.000Z",
              "costo": "60",
              "registerdate": "2026-09-04T19:15:15.667Z"
            }
        },
        404: {
            description: 'Consulta/Cita no encontrada',
            schema: { error: 'No se encontró la consulta/cita' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    softDeleteConsulta(req, res);
  },
);

export default router;
