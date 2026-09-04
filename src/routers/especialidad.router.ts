import { Router } from "express";
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

const router = Router();

router.get("/", getAllEspecialidades);
router.get(
  "/admin",
  validateQuerySchema(RangoFechasQuerySchema),
  getAllEspacialidadDeleted,
);
router.get(
  "/:id",
  validateParamsSchema(EspecialidadWhereUniqueInputObjectSchema),
  getEspecialidadById,
);
router.post(
  "/",
  validateBodySchema(EspecialidadUncheckedCreateInputObjectSchema),
  postEspecialidad,
);
router.put(
  "/:id",
  validateParamsSchema(EspecialidadWhereUniqueInputObjectSchema),
  validateBodySchema(EspecialidadUncheckedUpdateInputObjectSchema),
  putEspecialidad,
);
router.delete(
  "/:id",
  validateParamsSchema(EspecialidadWhereUniqueInputObjectSchema),
  softDeleteEspecialidad,
);
router.delete(
  "/admin/:id",
  validateParamsSchema(EspecialidadWhereUniqueInputObjectSchema),
  deleteEspecialidad,
);

export default router;
