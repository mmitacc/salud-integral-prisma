import { Router } from "express";
import type { Request, Response } from "express";
import {
  deletePaciente,
  getAllPaciente,
  getAllPacienteDeleted,
  getPacienteById,
  postPaciente,
  putPaciente,
  softDeletePaciente,
} from "../controllers/paciente.controller";
import {
  PacienteWhereUniqueInputObjectSchema,
  PacienteUncheckedCreateInputObjectSchema,
  PacienteUncheckedUpdateInputObjectSchema,
} from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
  validateQuerySchema,
} from "../middlewares/validate.schema";
import { RangoFechasQuerySchema } from "../schemas/querys.schema";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  /*
    #swagger.tags = ['Paciente']
    #swagger.summary = 'Obtener y filtrar todos los Pacientes'
    #swagger.description = 'Retorna toda la lista de pacientes con sus campos: id , nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate.'
    #swagger.responses = {
        200: {
            description: 'Pacientes hallados satisfactoriamente.',
            schema: {
                type: 'array',
                items: { $ref: '#/definitions/Paciente' }
            }
        },  
        404: {
            description: 'No hay Pacientes en la BD.',
            schema: { error: 'No hay pacientes en la BD.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
  }
  */
  getAllPaciente(req, res);
});
router.get(
  "/admin",
  authorize("ADMIN"),
  validateQuerySchema(RangoFechasQuerySchema),
  (req: Request, res: Response) => {
    /*
      #swagger.tags = ['Paciente']
      #swagger.summary = 'Obtener y filtrar todos los Pacientes eliminados'
      #swagger.description = 'Retorna toda la lista de pacientes eliminados.'
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
            description: 'Pacientes eliminados, hallados satisfactoriamente.',
            schema: {
                type: 'array',
                items: { $ref: '#/definitions/Paciente' }
            }
        },  
        404: {
            description: 'No se encontraron pacientes eliminados.',
            schema: { error: 'No se encontraron pacientes eliminados.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
          }
    }
    */
    getAllPacienteDeleted(req, res);
  },
);
router.get(
  "/:id",
  validateParamsSchema(PacienteWhereUniqueInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Paciente']
    #swagger.summary = 'Obtener un paciente por ID'
    #swagger.description = 'Retorna un paciente con sus datos y todas las consultas relacionadas.'
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico de la paciente',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Paciente encontrado',
            schema: {
              "id": 1,
              "nombres": "Carlos Alberto",
              "apellidos": "Mendoza Ortiz",
              "telefono": "+054912367854",
              "email": "carlos@gmail.com",
              "masculino": true,
              "fechanacimiento": "2026-09-09T14:00:00.000Z",
              "tiposangre": "RHO+",
              "alergias": "Ninguna",
              "registerdate": "2026-09-04T19:15:15.667Z",
              "consultas": [
                {
                  "id": 1,
                  "id_paciente": 1,
                  "estado": "COMPLETADA",
                  "citadate": "2026-09-09T14:00:00.000Z",
                  "costo": 50,
                  "registerdate": "2026-09-04T19:15:15.667Z"
                }
              ]
            }
        },
        404: {
            description: 'No hay paciente con id = 999',
            schema: { error: 'Paciente no encontrado' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    getPacienteById(req, res);
  },
);
router.post(
  "/",
  authorize("ADMIN", "GERENCIA", "RECEPCIONISTA"),
  validateBodySchema(PacienteUncheckedCreateInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Paciente']
    #swagger.summary = 'Crear un nuevo paciente'
    #swagger.description = 'Crea un nuevo paciente con sus datos requeridos.'
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Datos para nuevo paciente',
        required: true,
        schema: {
            "nombres": "Carlos Alberto",
            "apellidos": "Mendoza Ortiz",
            "telefono": "+054912367854",
            "email": "carlos@gmail.com",
            "masculino": true,
            "fechanacimiento": "2006-09-09T14:00:00.000Z",
            "tiposangre": "RHO+",
            "alergias": "Ninguna"
        }
    }
    #swagger.responses = {
        201: {
            description: 'Paciente creado con éxito',
            schema: {
              "id": 14,
              "nombres": "Carlos Alberto",
              "apellidos": "Mendoza Ortiz",
              "telefono": "+054912367854",
              "email": "carlos@gmail.com",
              "masculino": true,
              "fechanacimiento": "2026-09-09T14:00:00.000Z",
              "tiposangre": "RHO+",
              "alergias": "Ninguna",
              "registerdate": "2006-09-04T19:15:15.667Z",
            }
        },
        400: {
            description: 'No se pudo crear el paciente',
            schema: { error: 'Faltan datos obligatorios.' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    postPaciente(req, res);
  },
);
router.put(
  "/:id",
  authorize("ADMIN", "GERENCIA", "RECEPCIONISTA"),
  validateParamsSchema(PacienteWhereUniqueInputObjectSchema),
  validateBodySchema(PacienteUncheckedUpdateInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Paciente']
    #swagger.summary = 'Actualizar algun dato de un paciente'
    #swagger.description = 'Modifica todos o algunos campos (nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias) de un paciente buscando por su ID.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID numérico de la paciente',
        required: true,
        type: 'number'
    }
    #swagger.parameters['body'] = {
        in: 'body',
        description: 'Datos para nuevo paciente',
        required: true,
        schema: {
            "nombres": "Carlos Alberto",
            "apellidos": "Mendoza Ortiz",
            "telefono": "+054912367854",
            "email": "carlos@gmail.com",
            "masculino": true,
            "fechanacimiento": "2006-09-09T14:00:00.000Z",
            "tiposangre": "RHO+",
            "alergias": "Ninguna"
        }
    }
    #swagger.responses = {
        200: {
            description: 'Paciente actualizado con exito.',
            schema: {
              "id": 14,
              "nombres": "Carlos Alberto",
              "apellidos": "Mendoza Ortiz",
              "telefono": "+054912367854",
              "email": "carlos@gmail.com",
              "masculino": true,
              "fechanacimiento": "2026-09-09T14:00:00.000Z",
              "tiposangre": "RHO+",
              "alergias": "Ninguna",
              "registerdate": "2006-09-04T19:15:15.667Z",
            }
        },
        404: {
            description: 'No existe un paciente con id = 999.',
            schema: { error: 'Paciente no encontrado' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    putPaciente(req, res);
  },
);
router.delete(
  "/:id",
  authorize("ADMIN", "GERENCIA"),
  validateParamsSchema(PacienteWhereUniqueInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Paciente']
    #swagger.summary = 'Eliminar un paciente'
    #swagger.description = 'Elimina un paciente con su ID.'
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico del paciente',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Paciente eliminado con éxito',
            schema: {
              "id": 14,
              "nombres": "Carlos Alberto",
              "apellidos": "Mendoza Ortiz",
              "telefono": "+054912367854",
              "email": "carlos@gmail.com",
              "masculino": true,
              "fechanacimiento": "2026-09-09T14:00:00.000Z",
              "tiposangre": "RHO+",
              "alergias": "Ninguna",
              "registerdate": "2006-09-04T19:15:15.667Z",
            }
        },  
        404: {
            description: 'Paciente no encontrado',
            schema: { error: 'Paciente no encontrado' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    softDeletePaciente(req, res);
  },
);
router.delete(
  "/admin/:id",
  authorize("ADMIN"),
  validateParamsSchema(PacienteWhereUniqueInputObjectSchema),
  (req: Request, res: Response) => {
    /*
    #swagger.tags = ['Paciente']
    #swagger.summary = 'Eliminar un paciente REALMENTE'
    #swagger.description = 'Elimina un paciente con su ID'
    #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID numérico del paciente',
    required: true,
    type: 'integer'
    }
    #swagger.responses = {
        200: {
            description: 'Paciente eliminado con éxito',
            schema: {
              "id": 14,
              "nombres": "Carlos Alberto",
              "apellidos": "Mendoza Ortiz",
              "telefono": "+054912367854",
              "email": "carlos@gmail.com",
              "masculino": true,
              "fechanacimiento": "2026-09-09T14:00:00.000Z",
              "tiposangre": "RHO+",
              "alergias": "Ninguna",
              "registerdate": "2006-09-04T19:15:15.667Z",
              "deleted": true
            }
        },  
        404: {
            description: 'Paciente no encontrado',
            schema: { error: 'Paciente no encontrado' }
        },
        500: {
            description: 'Error interno del servidor.',
            schema: { error: 'Mensaje de error específico' }
        }
    }
    */
    deletePaciente(req, res);
  },
);

export default router;
