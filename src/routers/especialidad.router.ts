import { Router } from "express";
import type { Request, Response } from "express";
import {
  deleteEspecialidad,
  getAllEspecialidades,
  getAllEspacialidadDeleted,
  getEspecialidadById,
  postEspecialidad,
  putEspecialidad,
  softDeleteEspecialidad,
} from "../controllers/especialidad.controller";
import {
  EspecialidadWhereUniqueInputObjectSchema,
  EspecialidadUncheckedCreateInputObjectSchema,
  EspecialidadUncheckedUpdateInputObjectSchema,
} from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
  validateQuerySchema,
} from "../middlewares/validate.schema";
import { RangoFechasQuerySchema } from "../schemas/querys.schema";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.get("/", (reg: Request, res: Response) => {
  /*  
    #swagger.tags = ['Especialidad']
    #swagger.summary = 'Obtener y filtrar todos los Especialidades'
    #swagger.description = 'Retorna toda la lista de especialidades con sus campos: id ,tipo, registerdate..'
    #swagger.responses = {
        200: {
            description: 'Especialidades halladas satisfactoriamente.',
            schema: {
                type: 'array',
                items: { $ref: '#/definitions/Especialidad' }
            }
        },  
        404: {
            description: 'No hay Especialidades en la BD.',
            schema: { error: 'No hay especialidades en la BD.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
  }
  */
  getAllEspecialidades(reg, res);
});
router.get(
  "/admin",
  authorize("ADMIN"),
  validateQuerySchema(RangoFechasQuerySchema),
  (reg: Request, res: Response) => {
    /*  
      #swagger.tags = ['Especialidad']
      #swagger.summary = 'Obtener y filtrar todas las Especialidades eliminadas'
      #swagger.description = 'Retorna toda la lista de especialidades eliminadas.'
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
            description: 'Especialidades eliminadas, halladas satisfactoriamente.',
            schema: {
                type: 'array',
                items: { $ref: '#/definitions/Especialidad' }
            }
        },  
        404: {
            description: 'No se encontraron especialidades eliminadas.',
            schema: { error: 'No se encontraron especialidades eliminadas.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
          }
    }
    */
    getAllEspacialidadDeleted(reg, res);
  },
);

router.get(
  "/:id",
  validateParamsSchema(EspecialidadWhereUniqueInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Especialidad']
    #swagger.summary = 'Obtener una especialidad por ID'
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico de la especialidad',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Especialidad encontrada',
            schema: {
              "id": 1,
              "tipo": "Pediatría",
              "registerdate": "2026-09-04T13:07:58.996Z"
            }
        },
        404: {
            description: 'No hay especialidad con id = 999',
            schema: { error: 'No hay consultas/citas en la BD.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    getEspecialidadById(req, res);
  },
);
router.post(
  "/",
  authorize("GERENCIA", "ADMIN"),
  validateBodySchema(EspecialidadUncheckedCreateInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Especialidad']
    #swagger.summary = 'Crear una nueva especialidad'
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Datos para nueva especialidad',
        required: true,
        schema: {
            "tipo": "Medicina Naturista"
        }
    }
    #swagger.responses = {
        201: {
            description: 'Especialidad creada con éxito',
            schema: {
              "id": 13,
              "tipo": "Naturista",
              "registerdate": "2026-09-04T22:43:28.015Z"
            }
        },
        404: {
            description: 'No hay Especialidades en la BD.',
            schema: { error: 'No hay consultas/citas en la BD.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    postEspecialidad(req, res);
  },
);
router.put(
  "/:id",
  authorize("GERENCIA", "ADMIN"),
  validateParamsSchema(EspecialidadWhereUniqueInputObjectSchema),
  validateBodySchema(EspecialidadUncheckedUpdateInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Especialidad']
    #swagger.summary = 'Actualizar el tipo de una especialidad'
    #swagger.description = 'Modifica el campo tipo de una especialidad buscando por su ID.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID numérico de la especialidad',
        required: true,
        type: 'number'
    }
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Solo se puede actualizar el tipo de una especialidad.,
        required: true,
        schema: {
          "tipo": "Medicina Naturista",
        }
    }
    #swagger.responses = {
        200: {
            description: 'Especialidad actualizada con exito.',
            schema: {
              "id": 13,
              "tipo": "Medicina Naturista",
              "registerdate": "2026-09-04T22:43:28.015Z"
            }
        },
        404: {
            description: 'No existe una especialidad con id = 999.',
            schema: { error: 'Especialidad no encontrada' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    putEspecialidad(req, res);
  },
);
router.delete(
  "/:id",
  authorize("GERENCIA", "ADMIN"),
  validateParamsSchema(EspecialidadWhereUniqueInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Especialidad']
    #swagger.summary = 'Eliminar una especialidad'
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico de la especialidad',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Especialidad eliminada con éxito',
            schema: {
              "id": 13,
              "tipo": "Medicina Naturista",
              "registerdate": "2026-09-04T22:43:28.015Z"
            }
        },
        404: {
            description: 'Especialidad no encontrada',
            schema: { error: 'Especialidad no encontrada' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    softDeleteEspecialidad(req, res);
  },
);
router.delete(
  "/admin/:id",
  authorize("ADMIN"),
  validateParamsSchema(EspecialidadWhereUniqueInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Especialidad']
    #swagger.summary = 'Eliminar una especialidad REALMENTE'
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico de la especialidad',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Especialidad eliminada con éxito',
            schema: {
              "id": 13,
              "tipo": "Medicina Naturista",
              "registerdate": "2026-09-04T22:43:28.015Z",
              "deleted": true
            }
        },
        404: {
            description: 'Especialidad no encontrada',
            schema: { error: 'Especialidad no encontrada' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    deleteEspecialidad(req, res);
  },
);

export default router;
