import { Router } from "express";
import type { Request, Response } from "express";
import {
  getAllHistoriales,
  getHistorialById,
  postHistorial,
  putHistorial,
  softDeleteHistorial,
} from "../controllers/historial.controller";
import {
  HistorialWhereUniqueInputObjectSchema,
  HistorialUncheckedCreateInputObjectSchema,
  HistorialUncheckedUpdateInputObjectSchema,
} from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
  validateQuerySchema,
} from "../middlewares/validate.schema";
import { RangoFechasQuerySchema } from "../schemas/querys.schema";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.get(
  "/",
  authorize("ADMIN", "GERENCIA", "MEDICO"),
  (req: Request, res: Response) => {
    /*  
    #swagger.tags = ['Historial']
    #swagger.summary = 'Obtener y filtrar todos los Historiales'
    #swagger.description = 'Retorna toda la lista de historiales con sus campos: id ,id_paciente, motivo, antecedentes, triaje, dianostico, tratamiento, receta,, registerdate.'
    #swagger.responses = {
        200: {
            description: 'Historiales halladas satisfactoriamente.',
            schema: {
                type: 'array',
                items: { $ref: '#/definitions/Historial' }
            }
        },  
        404: {
            description: 'No hay Historiales en la BD.',
            schema: { error: 'No hay historiales en la BD.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
  }
  */
    getAllHistoriales(req, res);
  },
);

router.get(
  "/:id",
  authorize("ADMIN", "GERENCIA", "MEDICO"),
  validateParamsSchema(HistorialWhereUniqueInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Historial']
    #swagger.summary = 'Obtener un historial por ID'
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico de la historial',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Historial encontrado',
            schema: {
              "id": 1,
              "id_paciente": 2,
              "motivo": "Control anual",
              "antecedentes": "Diabetes tipo 2 controlada",
              "triaje": "PA: 130/85, FC: 80, T: 37.2°C",
              "diagnostico": "Diagnóstico en observación",
              "tratamiento": "Reposo e hidratación",
              "receta": "Paracetamol 500mg cada 8 horas por 3 días",
              "registerdate": "2026-09-04T13:11:56.353Z"
            }
        },
        404: {
            description: 'No hay historial con id = 999',
            schema: { error: 'Historial no encontrado.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    getHistorialById(req, res);
  },
);

router.post(
  "/",
  authorize("ADMIN", "GERENCIA", "MEDICO"),
  validateBodySchema(HistorialUncheckedCreateInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Historial']
    #swagger.summary = 'Crear un nuevo historial de un paciente'
    #swagger.requestBody = {
        description: 'Datos para nuevo historial',
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                      "id_paciente": {type: 'number', example: 2},
                      "motivo": {type: 'string', example: "Control anual"},
                      "antecedentes": {type: 'string', example: "Diabetes tipo 2 controlada"},
                      "triaje": {type: 'string', example: "PA: 130/85, FC: 80, T: 37.2°C"},
                      "diagnostico": {type: 'string', example: "Diagnóstico en observación"},
                      "tratamiento": {type: 'string', example: "Reposo e hidratación"},
                      "receta": {type: 'string', example: "Paracetamol 500mg cada 8 horas por 3 días"}
                    }
                }
            }
        }
    }
    #swagger.responses = {
        201: {
            description: 'Historial creado con éxito',
            schema: {
              "id": 14,
              "id_paciente": 2,
              "motivo": "Control anual",
              "antecedentes": "Diabetes tipo 2 controlada",
              "triaje": "PA: 130/85, FC: 80, T: 37.2°C",
              "diagnostico": "Diagnóstico en observación",
              "tratamiento": "Reposo e hidratación",
              "receta": "Paracetamol 500mg cada 8 horas por 3 días",
              "registerdate": "2026-09-04T22:43:28.015Z"
            }
        },
        400: {
            description: 'No se pudo crear el historial',
            schema: { error: 'Faltan datos obligatorios.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    postHistorial(req, res);
  },
);

router.put(
  "/:id",
  authorize("ADMIN", "GERENCIA", "MEDICO"),
  validateParamsSchema(HistorialWhereUniqueInputObjectSchema),
  validateBodySchema(HistorialUncheckedUpdateInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Historial']
    #swagger.summary = 'Actualizar algun dato de un historial'
    #swagger.description = 'Modifica todos los campos (id_paciente, motivo, antecedentes, triaje, diagnostico, tratamiento, receta) de un historial buscando por su ID.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID numérico de la historial',
        required: true,
        type: 'number'
    }
    #swagger.requestBody = {
        description: 'Campos que se desean actualizar. Puede actualizar uno o todos los campos del historial',
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: 'object',
                    properties: {
                      "motivo": {type: 'string', example: "Control anual"},
                      "antecedentes": {type: 'string', example: "Diabetes tipo 2 controlada"},
                      "triaje": {type: 'string', example: "PA: 130/85, FC: 80, T: 37.2°C"},
                      "diagnostico": {type: 'string', example: "Diagnóstico en observación"},
                      "tratamiento": {type: 'string', example: "Reposo e hidratación"},
                      "receta": {type: 'string', example: "Paracetamol 500mg cada 8 horas por 3 días"}
                    }
                }
            }
        }
    }
    #swagger.responses = {
        200: {
            description: 'Historial actualizado con exito.',
            schema: {
              "id": 14,
              "id_paciente": 2,
              "motivo": "Control anual",
              "antecedentes": "Diabetes tipo 2 controlada",
              "triaje": "PA: 130/85, FC: 80, T: 37.2°C",
              "diagnostico": "Diagnóstico en observación",
              "tratamiento": "Reposo e hidratación",
              "receta": "Paracetamol 500mg cada 8 horas por 3 días",
              "registerdate": "2026-09-04T22:43:28.015Z"
            }
        },
        404: {
            description: 'No existe un historial con id = 999.',
            schema: { error: 'Historial no encontrado' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    putHistorial(req, res);
  },
);

router.delete(
  "/:id",
  authorize("ADMIN", "GERENCIA", "MEDICO"),
  validateParamsSchema(HistorialWhereUniqueInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Historial']
    #swagger.summary = 'Eliminar un historial'
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico del historial',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Historial eliminado con éxito',
            schema: {
              "id": 14,
              "id_paciente": 2,
              "motivo": "Control anual",
              "antecedentes": "Diabetes tipo 2 controlada",
              "triaje": "PA: 130/85, FC: 80, T: 37.2°C",
              "diagnostico": "Diagnóstico en observación",
              "tratamiento": "Reposo e hidratación",
              "receta": "Paracetamol 500mg cada 8 horas por 3 días",
              "registerdate": "2026-09-04T22:43:28.015Z",
            }
        },
        404: {
            description: 'Historial no encontrado',
            schema: { error: 'Historial no encontrado' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    softDeleteHistorial(req, res);
  },
);

export default router;
