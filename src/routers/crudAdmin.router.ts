import { Router } from "express";
import type { Request, Response } from "express";
import {
  getAllDeleted,
  getFirst,
  updateDeleted,
  deleteReal,
} from "../controllers/crudAdmin.controller";
import { ParamsAdminSchema } from "../schemas/querys.schema";
import { queryModeloAdminSchema } from "../schemas/query.crudAdmin.schema";
import {
  validateQuerySchema,
  validateParamsSchema,
} from "../middlewares/validate.schema";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.get(
  "/:modelo",
  authorize("ADMIN"),
  validateQuerySchema(queryModeloAdminSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['ADMIN']
    #swagger.summary = 'Obtener y filtrar todos los registros de un modelo, filtrarlos por fechas y por deleted'
    #swagger.description = 'Retorna toda la lista de registros de un modelo con todos sus campos'
    #swagger.parameters['modelo'] = {
    in: 'path',
    description: 'Nombre de la tabla a consultar',
    required: true,
    type: 'string'
    }
    #swagger.parameters['deleted'] = {
        in: 'query',
        description: 'Si se desea filtrar los registros eliminados (true) o no (false)',
        required: false,
        type: 'boolean'
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
            description: 'Consultas halladas satisfactoriamente.',
            schema: {
                type: 'array',
                items: { $ref: '#/definitions/Consulta' }
            }
        },
        404: {
            description: 'No hay registros sobre el modelo en la BD.',
            schema: { error: 'No hay registros sobre el modelo en la BD.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    getAllDeleted(req, res);
  },
);

router.get(
  "/:modelo/:id",
  authorize("ADMIN"),
  validateParamsSchema(ParamsAdminSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['ADMIN']
    #swagger.summary = 'Obtener un registro de un modelo por ID'
    #swagger.parameters['modelo'] = {
    in: 'path',
    description: 'Nombre de la tabla a consultar',
    required: true,
    type: 'string'
    }
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico del registro',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Registro hallado satisfactoriamente.',
            schema: {"id": 1, ... , "deleted": false, "registerdate": "2026-09-04T19:15:15.667Z"},
            }
        },
        404: {
            description: 'No hay registros sobre el modelo en la BD.',
            schema: { error: 'No hay registros sobre el modelo en la BD.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    getFirst(req, res);
  },
);

router.put(
  "/:modelo/:id",
  authorize("ADMIN"),
  validateParamsSchema(ParamsAdminSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['ADMIN']
    #swagger.summary = 'Actualizar solo el estado <deleted> a true, de un registro de un modelo por ID'
    #swagger.parameters['modelo'] = {
    in: 'path',
    description: 'Nombre de la tabla a aplicar la operación',
    required: true,
    type: 'string'
    }
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico del registro',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Registro recuperado con éxito',
            schema: {"id": 1, ... , "deleted": true, "registerdate": "2026-09-04T19:15:15.667Z"},
            }
        },
        404: {
            description: 'No hay registros sobre el modelo en la BD.',
            schema: { error: 'En el modelo: paciente, no se encontró el registro con id: 999' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    updateDeleted(req, res);
  },
);

router.delete(
  "/:modelo/:id",
  authorize("ADMIN"),
  validateParamsSchema(ParamsAdminSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['ADMIN']
    #swagger.summary = 'Eliminar un registro REALMENTE de un modelo por ID en la BD'
    #swagger.parameters['modelo'] = {
    in: 'path',
    description: 'Nombre de la tabla a consultar',
    required: true,
    type: 'string'
    }
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico del registro',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Registro eliminado con éxito',
            schema: {"id": 1, ... , "deleted": true, "registerdate": "2026-09-04T19:15:15.667Z"},
            }
        },
        404: {
            description: 'No hay registros sobre el modelo en la BD.',
            schema: { error: 'Registro con id:999 no encontrado, en el modelo: paciente' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    deleteReal(req, res);
  },
);

export default router;
