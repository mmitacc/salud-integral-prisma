import { Router } from "express";
import type { Request, Response } from "express";
import {
  deleteHistorial,
  getAllHistoriales,
  getAllHistorialDeleted,
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
  "/admin",
  authorize("ADMIN"),
  validateQuerySchema(RangoFechasQuerySchema),
  (req: Request, res: Response) => {
    /*  
      #swagger.tags = ['Historial']
      #swagger.summary = 'Obtener y filtrar todos los Historiales eliminados'
      #swagger.description = 'Retorna toda la lista de historiales eliminados.'
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
            description: 'Historiales eliminados, hallados satisfactoriamente.',
            schema: {
                type: 'array',
                items: { $ref: '#/definitions/Historial' }
            }
        },  
        404: {
            description: 'No se encontraron historiales eliminados.',
            schema: { error: 'No se encontraron historiales eliminados.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
          }
    }
    */
    getAllHistorialDeleted(req, res);
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
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Datos para nuevo historial',
        required: true,
        schema: {
            "id_paciente": 2,
            "motivo": "Control anual",
            "antecedentes": "Diabetes tipo 2 controlada",
            "triaje": "PA: 130/85, FC: 80, T: 37.2°C",
            "diagnostico": "Diagnóstico en observación",
            "tratamiento": "Reposo e hidratación",
            "receta": "Paracetamol 500mg cada 8 horas por 3 días"
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
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Campos que se desean actualizar. Puede actualizar uno o todos los campos del historial',
        required: true,
        schema: {
          "id_paciente": 2,
          "motivo": "Control anual",
          "antecedentes": "Diabetes tipo 2 controlada",
          "triaje": "PA: 130/85, FC: 80, T: 37.2°C",
          "diagnostico": "Diagnóstico en observación",
          "tratamiento": "Reposo e hidratación",
          "receta": "Paracetamol 500mg cada 8 horas por 3 días"
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
router.delete(
  "/admin/:id",
  authorize("ADMIN"),
  validateParamsSchema(HistorialWhereUniqueInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Historial']
    #swagger.summary = 'Eliminar un historial REALMENTE'
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
              "deleted": true
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
    deleteHistorial(req, res);
  },
);

export default router;
